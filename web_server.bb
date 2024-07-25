#!/usr/bin/env bb

(ns web-server
  (:require
   [org.httpkit.server :as server]
   [cheshire.core :as json]
   [clojure.string]))

(load-file "./whois.bb")
(require '[whois :refer [is-available-domain]])

(defn split-and-get-last-value [s]
  (let [parts (clojure.string/split s #"=")]
    (last parts)))

(defn handler [req]
  (let [query-string (get req :query-string)
        uri (split-and-get-last-value query-string)
        res (is-available-domain uri)]
    {:status 200
     :headers {"Content-Type" "application/json"
               "Access-Control-Allow-Origin" "*"
               "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
               "Access-Control-Allow-Headers" "Content-Type"}
     :body (json/encode {:available res})}
    ))

(defonce server-instance (atom nil))

(defn start-server []
  (reset! server-instance (server/run-server handler {:port 8080}))
  (println "Server is running on port 8080"))

(defn stop-server []
  (when @server-instance
    (@server-instance :timeout 100)
    (reset! server-instance nil)
    (println "Server stopped")))

;; Start the server
(start-server)

;; To keep the server running
@(promise)
