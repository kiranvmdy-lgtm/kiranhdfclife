import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
    Newspaper,
    Clock,
    TrendingUp,
    AlertCircle,
    ArrowRight,
    ExternalLink,
    RefreshCw,
    Calendar,
    Tag,
    Bookmark,
    Share2,
    ChevronRight,
    Loader2,
    Wifi,
    WifiOff,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    category: string;
    date: string;
    source: string;
    sourceUrl?: string;
    image?: string;
    isBreaking?: boolean;
    isFeatured?: boolean;
}

// RSS to JSON proxy URL (using a free CORS proxy for RSS feeds)
const NEWS_SOURCES = [
    {
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://economictimes.indiatimes.com/industry/banking/finance/insure/rssfeeds/13358299.cms",
        category: "Insurance",
        name: "Economic Times"
    },
    {
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.moneycontrol.com/rss/MCtopnews.xml",
        category: "Finance",
        name: "Moneycontrol"
    }
];

// Fallback static news data for when API fails or for important curated content
const CURATED_NEWS: NewsItem[] = [
    {
        id: "curated-1",
        title: "Government Raises FDI Limit in Insurance Sector to 100%",
        summary: "The 'Sabka Bima Sabki Raksha' bill passed in December 2025 removes the previous FDI cap, allowing 100% foreign investment in Indian insurance companies. This landmark reform is expected to attract significant global capital.",
        category: "Regulatory",
        date: new Date().toISOString().split('T')[0],
        source: "Economic Times",
        sourceUrl: "https://economictimes.indiatimes.com",
        isBreaking: true,
        isFeatured: true,
    },
    {
        id: "curated-2",
        title: "GST Exemption on Life & Health Insurance Policies",
        summary: "The government has decided to exempt individual life and health insurance policies from GST, making insurance more affordable for millions of Indians.",
        category: "Policy",
        date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        source: "Business Standard",
        sourceUrl: "https://business-standard.com",
        isFeatured: true,
    },
    {
        id: "curated-3",
        title: "IRDAI Introduces Enhanced Surrender Value Norms",
        summary: "New IRDAI regulations mandate improved surrender values for policyholders who wish to exit their policies prematurely.",
        category: "Regulatory",
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        source: "IRDAI",
        sourceUrl: "https://irdai.gov.in",
    },
    {
        id: "curated-4",
        title: "India's Insurance Premium Collection Crosses ₹12 Lakh Crore",
        summary: "According to IRDAI's Annual Report 2024-25, India collected total insurance premiums of ₹11.93 lakh crore from 41.84 crore policies.",
        category: "Market",
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        source: "IRDAI Annual Report",
        isFeatured: true,
    },
    {
        id: "curated-5",
        title: "HDFC Life Reports Strong Q3 Results with 18% Growth",
        summary: "HDFC Life Insurance reported robust Q3 FY25 results with new business premiums growing 18% year-on-year.",
        category: "Company",
        date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        source: "HDFC Life",
        sourceUrl: "https://hdfclife.com",
    },
    {
        id: "curated-6",
        title: "Term Insurance Premiums Set to Rise in 2025",
        summary: "Industry experts predict a 10-15% increase in term insurance premiums due to updated mortality tables and increased claim costs.",
        category: "Products",
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        source: "Insurance Times",
    },
];

const InsuranceNews = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [error, setError] = useState<string | null>(null);

    const categories = [
        { id: "all", label: "All News", icon: Newspaper },
        { id: "Regulatory", label: "Regulatory", icon: AlertCircle },
        { id: "Market", label: "Market", icon: TrendingUp },
        { id: "Company", label: "Company", icon: Bookmark },
        { id: "Insurance", label: "Insurance", icon: Tag },
        { id: "Policy", label: "Policy", icon: Calendar },
        { id: "Products", label: "Products", icon: Tag },
    ];

    // Categorize news based on keywords
    const categorizeNews = (title: string, description: string): string => {
        const text = (title + " " + description).toLowerCase();

        if (text.includes("irdai") || text.includes("regulation") || text.includes("regulator") || text.includes("policy change")) {
            return "Regulatory";
        }
        if (text.includes("hdfc") || text.includes("lic") || text.includes("icici") || text.includes("sbi life") || text.includes("company") || text.includes("q1") || text.includes("q2") || text.includes("q3") || text.includes("q4") || text.includes("result")) {
            return "Company";
        }
        if (text.includes("market") || text.includes("growth") || text.includes("premium") || text.includes("industry") || text.includes("sector")) {
            return "Market";
        }
        if (text.includes("term") || text.includes("ulip") || text.includes("endowment") || text.includes("plan") || text.includes("product")) {
            return "Products";
        }
        if (text.includes("government") || text.includes("ministry") || text.includes("budget") || text.includes("gst") || text.includes("tax")) {
            return "Policy";
        }
        return "Insurance";
    };

    // Fetch news from RSS feeds
    const fetchNews = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const allNews: NewsItem[] = [...CURATED_NEWS];

            // Try to fetch from RSS feeds
            for (const source of NEWS_SOURCES) {
                try {
                    const response = await fetch(source.url);
                    if (response.ok) {
                        const data = await response.json();
                        if (data.status === "ok" && data.items) {
                            const newsFromFeed: NewsItem[] = data.items.slice(0, 5).map((item: any, index: number) => ({
                                id: `${source.name}-${index}-${Date.now()}`,
                                title: item.title || "No title",
                                summary: item.description?.replace(/<[^>]*>/g, '').slice(0, 250) || item.content?.replace(/<[^>]*>/g, '').slice(0, 250) || "No description available",
                                category: categorizeNews(item.title || "", item.description || ""),
                                date: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                                source: source.name,
                                sourceUrl: item.link,
                                image: item.enclosure?.link || item.thumbnail,
                                isFeatured: index === 0,
                            }));
                            allNews.push(...newsFromFeed);
                        }
                    }
                } catch (feedError) {
                    console.warn(`Failed to fetch from ${source.name}:`, feedError);
                }
            }

            // Sort by date (newest first)
            allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            // Remove duplicates based on title similarity
            const uniqueNews = allNews.filter((news, index, self) =>
                index === self.findIndex((n) => n.title.toLowerCase().trim() === news.title.toLowerCase().trim())
            );

            setNewsItems(uniqueNews);
            setLastUpdated(new Date());
        } catch (err) {
            console.error("Error fetching news:", err);
            setError("Unable to fetch latest news. Showing cached articles.");
            setNewsItems(CURATED_NEWS);
            setLastUpdated(new Date());
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Auto-fetch on mount
    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    // Auto-refresh every 5 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            if (navigator.onLine) {
                fetchNews();
            }
        }, 5 * 60 * 1000); // 5 minutes

        return () => clearInterval(interval);
    }, [fetchNews]);

    // Monitor online status
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            fetchNews();
        };
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, [fetchNews]);

    const filteredNews =
        selectedCategory === "all"
            ? newsItems
            : newsItems.filter((item) => item.category === selectedCategory);

    const featuredNews = newsItems.filter((item) => item.isFeatured).slice(0, 3);
    const breakingNews = newsItems.find((item) => item.isBreaking);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const getRelativeTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMins < 60) return `${diffMins} min ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "Yesterday";
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        return formatDate(dateString);
    };

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            Regulatory: "bg-red-500/10 text-red-600 border-red-200",
            Market: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
            Company: "bg-blue-500/10 text-blue-600 border-blue-200",
            Technology: "bg-purple-500/10 text-purple-600 border-purple-200",
            Products: "bg-amber-500/10 text-amber-600 border-amber-200",
            Policy: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
            Insurance: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
            Finance: "bg-green-500/10 text-green-600 border-green-200",
        };
        return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-200";
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-8 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                        <div>
                            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full mb-4">
                                <Newspaper className="w-4 h-4" />
                                Live Insurance News
                            </span>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                                Latest Insurance News
                            </h1>
                            <p className="text-muted-foreground mt-2">
                                Stay updated with live developments in India's insurance industry
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                {isOnline ? (
                                    <Wifi className="w-4 h-4 text-emerald-500" />
                                ) : (
                                    <WifiOff className="w-4 h-4 text-red-500" />
                                )}
                                <span className={isOnline ? "text-emerald-600" : "text-red-600"}>
                                    {isOnline ? "Live" : "Offline"}
                                </span>
                            </div>
                            {lastUpdated && (
                                <div className="text-sm text-muted-foreground">
                                    <Clock className="inline w-4 h-4 mr-1" />
                                    {getRelativeTime(lastUpdated.toISOString())}
                                </div>
                            )}
                            {isLoading && (
                                <Loader2 className="w-5 h-5 text-primary animate-spin" />
                            )}
                        </div>
                    </div>

                    {/* Error Banner */}
                    {error && (
                        <div className="bg-amber-500/10 border border-amber-200 rounded-lg p-3 mb-4 text-amber-700 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Breaking News Banner */}
                    {breakingNews && !isLoading && (
                        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-xl p-4 mb-8 shadow-lg">
                            <div className="flex items-start gap-3">
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white text-red-600 rounded-full text-xs font-bold uppercase animate-pulse">
                                    <AlertCircle className="w-3 h-3" />
                                    Breaking
                                </span>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-lg">{breakingNews.title}</h3>
                                    <p className="text-white/90 text-sm mt-1">{breakingNews.summary.slice(0, 150)}...</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-4 px-4 md:px-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-md border-b border-border/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.id
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-background text-foreground hover:bg-primary/10 border border-border"
                                    }`}
                            >
                                <cat.icon className="w-4 h-4" />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Loading State */}
            {isLoading && newsItems.length === 0 && (
                <section className="section-padding">
                    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                        <p className="text-muted-foreground">Loading latest news...</p>
                    </div>
                </section>
            )}

            {/* Featured News */}
            {!isLoading && selectedCategory === "all" && featuredNews.length > 0 && (
                <section className="section-padding">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-primary" />
                            Featured Stories
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {featuredNews.map((news, index) => (
                                <div
                                    key={news.id}
                                    className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                                        }`}
                                >
                                    <div className={`${index === 0 ? "p-8" : "p-6"}`}>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(news.category)}`}>
                                                {news.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground">{getRelativeTime(news.date)}</span>
                                        </div>
                                        <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors ${index === 0 ? "text-2xl md:text-3xl mb-4" : "text-lg mb-3"}`}>
                                            {news.title}
                                        </h3>
                                        <p className={`text-muted-foreground leading-relaxed ${index === 0 ? "text-base" : "text-sm line-clamp-3"}`}>
                                            {news.summary}
                                        </p>
                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                                            <span className="text-xs text-muted-foreground">{news.source}</span>
                                            {news.sourceUrl && (
                                                <a
                                                    href={news.sourceUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                                                >
                                                    Read More <ExternalLink className="w-3 h-3" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All News Grid */}
            {!isLoading && filteredNews.length > 0 && (
                <section className="section-padding bg-muted/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-display font-bold text-foreground">
                                {selectedCategory === "all" ? "Latest Updates" : `${selectedCategory} News`}
                            </h2>
                            <span className="text-sm text-muted-foreground">{filteredNews.length} articles</span>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredNews.map((news) => (
                                <article
                                    key={news.id}
                                    className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getCategoryColor(news.category)}`}>
                                            {news.category}
                                        </span>
                                        {news.isBreaking && (
                                            <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs font-bold animate-pulse">
                                                Breaking
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {news.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                                        {news.summary}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Calendar className="w-3 h-3" />
                                            {getRelativeTime(news.date)}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="p-1.5 hover:bg-primary/10 rounded-full transition-colors" title="Bookmark">
                                                <Bookmark className="w-4 h-4 text-muted-foreground" />
                                            </button>
                                            <button className="p-1.5 hover:bg-primary/10 rounded-full transition-colors" title="Share">
                                                <Share2 className="w-4 h-4 text-muted-foreground" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs text-muted-foreground">Source: {news.source}</span>
                                        {news.sourceUrl && (
                                            <a
                                                href={news.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-primary text-xs font-medium hover:underline"
                                            >
                                                Visit <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter Subscription */}
            <section className="section-padding bg-gradient-to-r from-secondary via-primary to-secondary">
                <div className="max-w-4xl mx-auto text-center">
                    <Newspaper className="w-16 h-16 text-accent mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                        Never Miss an Update
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8">
                        Subscribe to get daily insurance news and updates delivered to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-4 rounded-xl bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent shadow-lg"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
                        >
                            Subscribe
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </section>

            {/* Quick Links */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                            <h3 className="text-lg font-bold text-foreground mb-4">Quick Resources</h3>
                            <ul className="space-y-3">
                                {[
                                    { label: "IRDAI Official Website", url: "https://irdai.gov.in" },
                                    { label: "Insurance Ombudsman", url: "https://igms.irda.gov.in" },
                                    { label: "HDFC Life Official", url: "https://hdfclife.com" },
                                ].map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                            <h3 className="text-lg font-bold text-foreground mb-4">Need Insurance Guidance?</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Get expert advice on choosing the right insurance plan for your needs.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
                            >
                                Contact Kiran <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                            <h3 className="text-lg font-bold text-foreground mb-4">Explore Our Plans</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Browse our comprehensive range of HDFC Life insurance plans.
                            </p>
                            <Link
                                to="/insurance-plans"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-all"
                            >
                                View Plans <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InsuranceNews;
