import { Link } from "react-router-dom";
import {
    ArrowRight,
    Shield,
    Award,
    Users,
    TrendingUp,
    Building2,
    Globe,
    Heart,
    CheckCircle2,
    Star,
    BadgeCheck,
    Calendar,
    IndianRupee,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutHDFCLife = () => {
    const milestones = [
        { year: "2000", event: "HDFC Life established as a joint venture" },
        { year: "2008", event: "Crossed 10 million policies milestone" },
        { year: "2017", event: "Successfully listed on stock exchanges (NSE & BSE)" },
        { year: "2020", event: "Celebrated 20 years of protecting families" },
        { year: "2023", event: "50+ million lives insured across India" },
    ];

    const keyFacts = [
        {
            icon: Users,
            number: "50M+",
            label: "Lives Insured",
        },
        {
            icon: IndianRupee,
            number: "₹2.5L Cr+",
            label: "Sum Assured",
        },
        {
            icon: Building2,
            number: "400+",
            label: "Branches Nationwide",
        },
        {
            icon: Globe,
            number: "98%",
            label: "Claim Settlement Ratio",
        },
    ];

    const awards = [
        "Best Life Insurer - Economic Times",
        "Most Trusted Private Life Insurer",
        "Excellence in Customer Service Award",
        "Digital Innovation Award",
        "Best Employer in Insurance Sector",
        "Sustainability Excellence Award",
    ];

    const values = [
        {
            icon: Heart,
            title: "Customer First",
            description: "Every decision we make is centered around our customers' needs and well-being.",
        },
        {
            icon: Shield,
            title: "Integrity",
            description: "We operate with complete transparency and ethical business practices.",
        },
        {
            icon: TrendingUp,
            title: "Excellence",
            description: "We strive for excellence in everything we do, from products to service.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Together with our partners, we create lasting value for stakeholders.",
        },
    ];

    const products = [
        {
            name: "Term Insurance",
            description: "Pure protection plans with high coverage at affordable premiums",
            highlight: "Coverage up to ₹10 Crore",
        },
        {
            name: "Savings Plans",
            description: "Guaranteed savings with insurance protection for financial goals",
            highlight: "Guaranteed returns",
        },
        {
            name: "ULIPs",
            description: "Market-linked plans combining insurance with investment growth",
            highlight: "Wealth creation + Protection",
        },
        {
            name: "Pension Plans",
            description: "Secure your retirement with regular income for life",
            highlight: "Lifetime pension",
        },
        {
            name: "Child Plans",
            description: "Secure your child's education and future milestones",
            highlight: "Future secured",
        },
        {
            name: "Health Insurance",
            description: "Comprehensive health coverage for medical emergencies",
            highlight: "Complete health protection",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-20 bg-gradient-to-br from-primary via-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 bg-white/20 rounded-full px-6 py-3 mb-8">
                            <img
                                src="https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/about-us/hdfc-logo.svg"
                                alt="HDFC Life Logo"
                                className="h-8 invert"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <span className="text-primary-foreground font-semibold">Established 2000</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
                            About HDFC Life Insurance
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                            India's leading private life insurance company, trusted by over 50 million customers to protect their families and secure their financial future.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                            <Link to="/insurance-plans" className="btn-hero flex items-center gap-2">
                                Explore Insurance Plans
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="btn-outline-hero flex items-center gap-2">
                                Get Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts */}
            <section className="py-12 bg-background -mt-8 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {keyFacts.map((fact, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-6 shadow-xl text-center border border-border hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <fact.icon className="w-7 h-7 text-primary" />
                                </div>
                                <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                                    {fact.number}
                                </span>
                                <p className="text-muted-foreground text-sm mt-1">{fact.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                                Two Decades of Trust & Excellence
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                HDFC Life Insurance Company Limited is a joint venture between Housing Development Finance Corporation Limited (HDFC Ltd.), one of India's leading housing finance institutions, and abrdn (formerly Standard Life Aberdeen), a global investment company.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Since our inception in 2000, we have been committed to providing comprehensive life insurance solutions that cater to the diverse needs of individuals and families across India. Our focus on customer-centricity, innovation, and ethical business practices has made us one of the most trusted names in the Indian insurance industry.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Customer-centric approach",
                                    "Innovative products",
                                    "Digital-first solutions",
                                    "Ethical practices",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-center">
                                <Award className="w-20 h-20 text-accent mx-auto mb-6" />
                                <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
                                    Vision
                                </h3>
                                <p className="text-primary-foreground/90 italic text-lg">
                                    "To be the most successful and admired life insurance company, which means we are the most trusted company, the easiest to deal with, offer the best value for money and set the standards in the industry."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            What We Stand For
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center group hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                            Key Milestones
                        </h2>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center gap-4 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className={`bg-card rounded-xl p-6 shadow-lg border border-border inline-block ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                                            <span className="text-2xl font-display font-bold text-primary">{milestone.year}</span>
                                            <p className="text-foreground mt-2">{milestone.event}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                                        <Calendar className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Overview */}
            <section className="section-padding bg-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Our Offerings
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                            Comprehensive Product Range
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary transition-colors duration-300 group"
                            >
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
                                    <Star className="w-4 h-4 text-accent" />
                                    <span className="text-xs font-semibold text-accent">{product.highlight}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/insurance-plans" className="btn-hero inline-flex items-center gap-2">
                            View All Insurance Plans
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="py-16 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                            Awards & Recognition
                        </h2>
                        <p className="text-primary-foreground/80 mt-2">Trusted by industry experts</p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors duration-300"
                            >
                                <BadgeCheck className="w-8 h-8 text-accent mx-auto mb-2" />
                                <p className="text-primary-foreground text-sm font-medium">{award}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-secondary via-secondary to-primary rounded-3xl p-8 md:p-12 shadow-2xl">
                        <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                            Join the HDFC Life Family
                        </h2>
                        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                            Let us help you choose the right insurance plan that protects your family and secures your financial future.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-hero flex items-center gap-2">
                                Contact Kiran Today
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutHDFCLife;
