#!/usr/bin/env bb

(ns whois
  (:require
   [babashka.process :refer [shell]]
   [clojure.string]))

(defn parse-available-domain
  [whois-output]
  (if (or (clojure.string/includes? whois-output "No match for domain")
          (clojure.string/includes? whois-output "Domain not found"))
    :available
    :unavailable))

(defn query-whois-for-domain
  [domain]
  (-> (shell {:out :string :err :out} "whois" domain)
      :out
      parse-available-domain))

(defn is-available-domain
  [domain]
  (let [availability (query-whois-for-domain domain)]
    (= availability :available)))

(comment
  (query-whois-for-domain "takeoff.enterprises")

  (is-available-domain "takeoff.radio.fm")

  ;; (query-whois-for-domain "takeoff.com.co")
  (shell {:out :string :err :out} "whois" "takeoff.org.uk")
  
  )