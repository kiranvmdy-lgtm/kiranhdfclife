import { Link } from "react-router-dom";
import {
    ArrowRight,
    Shield,
    Users,
    BookOpen,
    Handshake,
    Ban,
    CreditCard,
    Lock,
    HeadphonesIcon,
    CheckCircle2,
    XCircle,
    Target,
    Heart,
    FileCheck,
    MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowWeDiffer = () => {
    const differences = [
        {
            icon: Target,
            title: "Personalized Plans",
            subtitle: "Tailored to YOUR Needs",
            description:
                "We don't believe in one-size-fits-all. We analyze your income, goals, family situation, and future plans to recommend insurance that truly fits you.",
            highlight: "Your goals = Your plan",
        },
        {
            icon: Handshake,
            title: "End-to-End Support",
            subtitle: "From Start to Finish",
            description:
                "We're with you at every step - from understanding your needs, selecting the right plan, completing documentation, to claim settlement.",
            highlight: "Never alone in the journey",
        },
        {
            icon: Ban,
            title: "Zero Mis-selling",
            subtitle: "Honest & Transparent",
            description:
                "We NEVER push products for commissions. Our recommendations are based purely on what's best for you and your family's financial security.",
            highlight: "Your trust is our priority",
        },
        {
            icon: BookOpen,
            title: "Education First",
            subtitle: "Learn Before You Earn",
            description:
                "Before you buy any plan, we ensure you completely understand what you're getting - benefits, exclusions, terms, and everything in between.",
            highlight: "Informed decisions only",
        },
        {
            icon: Lock,
            title: "100% Digital & Secure",
            subtitle: "No Cash Transactions",
            description:
                "All our transactions are online - secure, trackable, and transparent. No cash dealings means no fraud risk and complete peace of mind.",
            highlight: "Safe & traceable payments",
        },
        {
            icon: HeadphonesIcon,
            title: "Lifetime Support",
            subtitle: "Always Here for You",
            description:
                "From buying your policy to claiming benefits - we support you at every stage. You'll never feel lost or unheard with us.",
            highlight: "One call away, always",
        },
    ];

    const processSteps = [
        {
            step: 1,
            title: "Understanding You",
            description: "We start by understanding your family, income, goals, and existing coverage",
            icon: Users,
        },
        {
            step: 2,
            title: "Education Session",
            description: "We explain different plan types, their benefits, and what suits your needs",
            icon: BookOpen,
        },
        {
            step: 3,
            title: "Personalized Recommendation",
            description: "Based on your profile, we suggest the most suitable plans with complete transparency",
            icon: Target,
        },
        {
            step: 4,
            title: "Clear Documentation",
            description: "We help you with all paperwork, ensuring you understand every document you sign",
            icon: FileCheck,
        },
        {
            step: 5,
            title: "Secure Online Payment",
            description: "100% digital payment - safe, traceable, and instant confirmation",
            icon: CreditCard,
        },
        {
            step: 6,
            title: "Ongoing Support",
            description: "Policy queries, renewals, claims - we're just a call away for lifetime",
            icon: HeadphonesIcon,
        },
    ];

    const comparison = [
        { feature: "Personalized plan recommendation", us: true, others: false },
        { feature: "Complete education before purchase", us: true, others: false },
        { feature: "End-to-end transaction support", us: true, others: false },
        { feature: "Zero mis-selling guarantee", us: true, others: false },
        { feature: "100% online secure payments", us: true, others: false },
        { feature: "Lifetime customer support", us: true, others: false },
        { feature: "Transparent commission disclosure", us: true, others: false },
        { feature: "Claim assistance included", us: true, others: false },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-20 bg-gradient-to-br from-secondary via-secondary to-primary">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                    <div className="text-center">
                        <span className="inline-block bg-white/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-up">
                            What Makes Us Different
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
                            We Don't Just Sell Insurance<br />
                            <span className="text-accent">We Build Trust</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                            Experience the difference of working with someone who genuinely cares about your family's financial security.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Differences Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Our Promise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                            6 Ways We're Different
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {differences.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border overflow-hidden"
                            >
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-8 h-8 text-primary-foreground" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                                    <p className="text-primary font-semibold text-sm mb-4">{item.subtitle}</p>
                                    <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-accent" />
                                        <span className="text-sm font-semibold text-accent">{item.highlight}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="section-padding bg-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
                            Your Journey With Us
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            From the first conversation to lifetime support - here's how we ensure you get the best experience.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"></div>

                        <div className="space-y-8 lg:space-y-0">
                            {processSteps.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                        <div className={`bg-card rounded-2xl p-6 shadow-lg inline-block ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                                            <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                    <item.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                            </div>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Step number */}
                                    <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                                        <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                                    </div>

                                    {/* Empty space for alignment */}
                                    <div className="flex-1 hidden lg:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            See The Difference
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                            Us vs. Traditional Agents
                        </h2>
                    </div>

                    <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                        <div className="grid grid-cols-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                            <div className="p-4 font-semibold">Feature</div>
                            <div className="p-4 font-semibold text-center">Kiran@HDFC Life</div>
                            <div className="p-4 font-semibold text-center">Others</div>
                        </div>

                        {comparison.map((item, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-muted/50" : "bg-card"}`}
                            >
                                <div className="p-4 text-foreground text-sm md:text-base">{item.feature}</div>
                                <div className="p-4 flex justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="p-4 flex justify-center">
                                    <XCircle className="w-6 h-6 text-red-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-16 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {[
                            { number: "500+", label: "Happy Families Served" },
                            { number: "₹10Cr+", label: "Sum Assured Covered" },
                            { number: "100%", label: "Transparent Dealings" },
                            { number: "0", label: "Cash Transactions" },
                        ].map((stat, index) => (
                            <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                                <span className="text-4xl md:text-5xl font-display font-bold text-accent">
                                    {stat.number}
                                </span>
                                <p className="text-primary-foreground/90 text-sm mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Quote */}
            <section className="section-padding bg-muted">
                <div className="max-w-4xl mx-auto text-center">
                    <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
                    <blockquote className="text-2xl md:text-3xl font-display text-foreground italic mb-6">
                        "For the first time, I felt like someone genuinely cared about my family's protection, not just selling me a policy."
                    </blockquote>
                    <p className="text-muted-foreground">
                        — Ramesh K., Software Engineer, Bangalore
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-secondary via-secondary to-primary rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                        <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                            Experience the Difference Today
                        </h2>
                        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                            Let us show you what ethical, customer-first insurance advisory looks like.
                            No pressure, no hidden agendas - just honest guidance.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://wa.me/919035905406?text=Hi%20Kiran,%20I%20want%20a%20free%20insurance%20consultation.%20Please%20help%20me."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 hover:shadow-lg transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Get Free Consultation
                            </a>
                            <Link to="/insurance-plans" className="btn-outline-hero flex items-center gap-2">
                                Explore Plans
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

export default HowWeDiffer;
