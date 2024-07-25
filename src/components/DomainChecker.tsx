// components/DomainChecker.tsx
import { useState } from 'react';
import Result from './Result';

const tlds = ["academy", "accountant", "accountants", "actor", "agency", "apartments", "app", "associates", "attorney", "auction", "band", "bar", "bargains", "beer", "bet", "bid", "bike", "bingo", "biz", "black", "blog", "blue", "boo", "boston", "boutique", "broker", "builders", "business", "cab", "cafe", "camera", "camp", "capital", "cards", "care", "careers", "casa", "cash", "casino", "catering", "cc", "center", "ceo", "chat", "cheap", "church", "city", "claims", "cleaning", "clinic", "clothing", "cloud", "club", "co", "coach", "codes", "coffee", "college", "com", "community", "company", "compare", "computer", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "co.uk", "coupons", "credit", "creditcard", "cricket", "cruises", "dad", "dance", "date", "dating", "day", "deals", "degree", "delivery", "democrat", "dental", "dentist", "design", "dev", "diamonds", "digital", "direct", "directory", "discount", "doctor", "dog", "domains", "download", "education", "email", "energy", "engineer", "engineering", "enterprises", "equipment", "esq", "estate", "events", "exchange", "expert", "express", "fail", "faith", "family", "fans", "farm", "fashion", "finance", "financial", "fish", "fishing", "fit", "fitness", "flights", "florist", "fm", "foo", "football", "forex", "forsale", "foundation", "fun", "fund", "furniture", "futbol", "fyi", "gallery", "games", "garden", "gifts", "gives", "glass", "gmbh", "gold", "golf", "graphics", "gratis", "green", "gripe", "group", "guide", "guru", "haus", "health", "healthcare", "hockey", "holdings", "holiday", "horse", "hospital", "host", "house", "how", "immo", "immobilien", "industries", "info", "ink", "institute", "insure", "international", "investments", "io", "irish", "jetzt", "jewelry", "kaufen", "kim", "kitchen", "land", "lawyer", "lease", "legal", "lgbt", "life", "lighting", "limited", "limo", "live", "loan", "loans", "love", "ltd", "luxe", "maison", "management", "market", "marketing", "markets", "mba", "me", "media", "memorial", "men", "miami", "mobi", "moda", "money", "mortgage", "mov", "movie", "net", "network", "new", "news", "nexus", "ninja", "observer", "online", "org", "org.uk", "page", "partners", "parts", "party", "pet", "phd", "photography", "photos", "pictures", "pink", "pizza", "place", "plumbing", "plus", "press", "pro", "productions", "prof", "promo", "properties", "pub", "racing", "radio.fm", "realty", "recipes", "red", "rehab", "reise", "reisen", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rip", "rocks", "rodeo", "rsvp", "run", "sale", "salon", "sarl", "school", "schule", "science", "security", "select", "services", "shoes", "shopping", "show", "singles", "site", "soccer", "social", "software", "solar", "solutions", "soy", "space", "storage", "store", "stream", "studio", "style", "supplies", "supply", "support", "surf", "surgery", "systems", "tax", "taxi", "team", "tech", "technology", "tennis", "theater", "theatre", "tienda", "tips", "tires", "today", "tools", "tours", "town", "toys", "trade", "trading", "training", "tv", "uk", "university", "us", "vacations", "ventures", "vet", "viajes", "video", "villas", "vin", "vip", "vision", "vodka", "voyage", "watch", "webcam", "website", "wedding", "wiki", "win", "wine", "work", "works", "world", "wtf", "xyz", "yoga", "zone"];

const DomainChecker: React.FC = () => {
    const [domain, setDomain] = useState('');
    const [selectedTlds, setSelectedTlds] = useState<string[]>([]);

    const toggleTldSelection = (tld: string) => {
        setSelectedTlds(prev =>
            prev.includes(tld) ? prev.filter(item => item !== tld) : [...prev, tld]
        );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Domain Availability Checker</h1>
            <div className="mb-4">
                <label className="block mb-2 font-medium">Domain</label>
                <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-medium">Select TLDs</label>
                <div className="flex flex-wrap">
                    {tlds.map((tld) => (
                        <label key={tld} className="mr-4 mb-2">
                            <input
                                type="checkbox"
                                value={tld}
                                onChange={() => toggleTldSelection(tld)}
                                className="mr-2"
                            />
                            {tld}
                        </label>
                    ))}
                </div>
            </div>
            {domain ?
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Results</h2>
                    <ul>
                        {selectedTlds.map((tld) => (
                            <Result key={tld} domain={domain} tld={tld} />
                        ))}
                    </ul>
                </div> :
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Please input a domain above to view availabilty.</h2>
                </div>}
        </div>
    );
};

export default DomainChecker;
