import { Link } from "react-router-dom";
import {
    Shield,
    TrendingUp,
    Heart,
    Baby,
    Briefcase,
    ArrowRight,
    Star,
    Wallet,
    Clock,
    Users,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import heroFamily from "@/assets/hero-family.jpg";
import slideRetirement from "@/assets/slide-retirement.jpg";
import slideEducation from "@/assets/slide-education.jpg";

const InsurancePlans = () => {
    const heroSlides = [
        {
            image: heroFamily,
            title: "Term Insurance Plans",
            subtitle: "Comprehensive protection for your family's future",
        },
        {
            image: slideRetirement,
            title: "Retirement & Pension Plans",
            subtitle: "Secure your golden years with guaranteed income",
        },
        {
            image: slideEducation,
            title: "Child Future Plans",
            subtitle: "Building dreams, one policy at a time",
        },
    ];

    const planCategories = [
        {
            id: "term",
            icon: Shield,
            title: "Term Insurance Plans",
            description: "Pure life protection at affordable premiums",
            color: "from-red-500 to-orange-500",
            plans: [
                {
                    name: "HDFC Life Click 2 Protect Super",
                    description: "India's most comprehensive online term plan with multiple cover variants and flexible options.",
                    features: ["Life Option & Life Plus variants", "Terminal illness benefit", "Smart Exit - zero cost exit", "Life stage benefits"],
                    popular: true,
                    minPremium: "₹490/month*",
                },
                {
                    name: "HDFC Life Click 2 Protect Life",
                    description: "Affordable term insurance with essential protection for your family.",
                    features: ["Coverage up to age 85", "Accidental death benefit", "Premium waiver option", "Tax benefits under 80C"],
                    popular: false,
                    minPremium: "₹399/month*",
                },
                {
                    name: "HDFC Life Saral Jeevan Bima",
                    description: "Simple and standardized term insurance plan with basic protection.",
                    features: ["Easy to understand terms", "No medical tests for low sum assured", "Affordable premiums", "Hassle-free claims"],
                    popular: false,
                    minPremium: "₹299/month*",
                },
                {
                    name: "HDFC Life Smart Term Plan Pro",
                    description: "Advanced term plan with critical illness and accidental coverage.",
                    features: ["Critical illness cover", "Accidental death benefit", "Whole life cover option", "Income protection"],
                    popular: true,
                    minPremium: "₹599/month*",
                },
            ],
        },
        {
            id: "savings",
            icon: Wallet,
            title: "Savings & Investment Plans",
            description: "Guaranteed returns with life protection",
            color: "from-emerald-500 to-teal-500",
            plans: [
                {
                    name: "HDFC Life Sanchay Plus",
                    description: "Non-participating savings plan with guaranteed returns and life cover.",
                    features: ["Guaranteed additions", "Multiple payout options", "Long-term wealth creation", "Tax benefits"],
                    popular: true,
                    minPremium: "₹50,000/year*",
                },
                {
                    name: "HDFC Life Sanchay Par Advantage",
                    description: "Participating endowment plan with bonuses and guaranteed maturity.",
                    features: ["Reversionary bonus", "Terminal bonus", "Guaranteed maturity benefit", "Loan facility"],
                    popular: false,
                    minPremium: "₹36,000/year*",
                },
                {
                    name: "HDFC Life Sanchay Fixed Maturity Plan",
                    description: "Fixed maturity savings plan with guaranteed payout.",
                    features: ["Fixed maturity date", "Guaranteed payout", "Premium flexibility", "Life cover included"],
                    popular: false,
                    minPremium: "₹1,00,000 lumpsum*",
                },
            ],
        },
        {
            id: "ulip",
            icon: TrendingUp,
            title: "ULIP Plans",
            description: "Market-linked returns with insurance benefits",
            color: "from-blue-500 to-indigo-500",
            plans: [
                {
                    name: "HDFC Life Sampoorn Nivesh",
                    description: "Unit-linked plan with market-linked returns and financial protection.",
                    features: ["Multiple fund options", "Free fund switching", "Loyalty additions", "Partial withdrawal facility"],
                    popular: true,
                    minPremium: "₹12,000/year*",
                },
                {
                    name: "HDFC Life Click 2 Wealth",
                    description: "Online ULIP with low charges and flexible investment options.",
                    features: ["7 fund options", "Auto rebalancing", "Portfolio strategies", "Online management"],
                    popular: false,
                    minPremium: "₹18,000/year*",
                },
                {
                    name: "HDFC Life ProGrowth Plus",
                    description: "Growth-oriented ULIP with maximum market exposure.",
                    features: ["Equity-heavy funds", "Return of charges", "Wealth boosters", "Premium redirection"],
                    popular: true,
                    minPremium: "₹24,000/year*",
                },
                {
                    name: "HDFC Life Smart Protect Plan",
                    description: "ULIP with enhanced life protection and investment growth.",
                    features: ["Higher life cover", "Auto cover continuance", "Settlement option", "Top-up facility"],
                    popular: false,
                    minPremium: "₹30,000/year*",
                },
            ],
        },
        {
            id: "retirement",
            icon: Clock,
            title: "Retirement & Pension Plans",
            description: "Secure your post-retirement lifestyle",
            color: "from-purple-500 to-pink-500",
            plans: [
                {
                    name: "HDFC Life Systematic Retirement Plan",
                    description: "Disciplined savings plan for retirement with guaranteed income.",
                    features: ["Guaranteed vesting benefit", "Multiple annuity options", "Premium flexibility", "Joint life option"],
                    popular: true,
                    minPremium: "₹3,000/month*",
                },
                {
                    name: "HDFC Life Smart Pension Plus",
                    description: "Market-linked pension plan with higher return potential.",
                    features: ["ULIP-based returns", "6 fund options", "Annuity at maturity", "Life cover during policy"],
                    popular: false,
                    minPremium: "₹36,000/year*",
                },
                {
                    name: "HDFC Life Guaranteed Pension Plan",
                    description: "100% guaranteed pension with immediate or deferred annuity.",
                    features: ["Immediate annuity option", "Deferred annuity option", "Joint life annuity", "Return of purchase price"],
                    popular: true,
                    minPremium: "₹5,00,000 lumpsum*",
                },
            ],
        },
        {
            id: "child",
            icon: Baby,
            title: "Child Plans",
            description: "Secure your child's dreams and future",
            color: "from-amber-500 to-yellow-500",
            plans: [
                {
                    name: "HDFC Life Click 2 Achieve",
                    description: "Goal-based online plan for child's education and milestones.",
                    features: ["Target date alignment", "Premium waiver on death", "Flexible fund options", "Systematic investment"],
                    popular: true,
                    minPremium: "₹2,500/month*",
                },
                {
                    name: "HDFC Life YoungStar Super Premium",
                    description: "Comprehensive child plan with premium waiver and wealth creation.",
                    features: ["Education milestone payouts", "Premium waiver benefit", "Loyalty additions", "Income benefit"],
                    popular: false,
                    minPremium: "₹48,000/year*",
                },
                {
                    name: "HDFC Life Super Income Plan",
                    description: "Guaranteed income plan for child's future financial needs.",
                    features: ["Guaranteed annual income", "Milestone benefits", "Premium waiver", "Life cover for parent"],
                    popular: false,
                    minPremium: "₹60,000/year*",
                },
            ],
        },
        {
            id: "health",
            icon: Heart,
            title: "Health Insurance Plans",
            description: "Protection against health emergencies",
            color: "from-rose-500 to-red-500",
            plans: [
                {
                    name: "HDFC Life Cancer Care",
                    description: "Specialized cancer protection with lump sum and income benefits.",
                    features: ["Early & major stage cover", "Lump sum on diagnosis", "Premium waiver", "Income protection"],
                    popular: true,
                    minPremium: "₹350/month*",
                },
                {
                    name: "HDFC Life Critical Illness Plus",
                    description: "Coverage for multiple critical illnesses with comprehensive protection.",
                    features: ["45+ critical illnesses", "Lump sum payout", "Second opinion facility", "Recovery benefit"],
                    popular: false,
                    minPremium: "₹599/month*",
                },
                {
                    name: "HDFC Life Click 2 Protect Health",
                    description: "Comprehensive health protection with hospitalization benefits.",
                    features: ["Hospital cash benefit", "Surgical expenses cover", "ICU daily allowance", "Day care treatments"],
                    popular: false,
                    minPremium: "₹450/month*",
                },
            ],
        },
    ];

    const whyChooseStats = [
        { value: "98.5%", label: "Claim Settlement Ratio", icon: CheckCircle2 },
        { value: "60M+", label: "Lives Insured", icon: Users },
        { value: "500+", label: "Branches Nationwide", icon: Briefcase },
        { value: "24/7", label: "Customer Support", icon: Clock },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                            <Sparkles className="w-4 h-4" />
                            HDFC Life Insurance Plans
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-6 mb-4">
                            Comprehensive Insurance
                            <span className="text-primary block mt-2">For Every Life Stage</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose from India's most trusted insurer's range of plans designed to protect, grow, and secure your family's future.
                        </p>
                    </div>
                    <ImageCarousel slides={heroSlides} />
                </div>
            </section>

            {/* Plan Categories Navigation */}
            <section className="py-8 px-4 md:px-8 bg-muted/50 sticky top-16 z-40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {planCategories.map((category) => (
                            <a
                                key={category.id}
                                href={`#${category.id}`}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                            >
                                <category.icon className="w-4 h-4" />
                                {category.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plan Categories */}
            {planCategories.map((category, catIndex) => (
                <section
                    key={category.id}
                    id={category.id}
                    className={`section-padding ${catIndex % 2 === 1 ? "bg-muted/30" : ""}`}
                >
                    <div className="max-w-7xl mx-auto">
                        {/* Category Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                                <category.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                                    {category.title}
                                </h2>
                                <p className="text-muted-foreground">{category.description}</p>
                            </div>
                        </div>

                        {/* Plans Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {category.plans.map((plan, planIndex) => (
                                <div
                                    key={planIndex}
                                    className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-1"
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                                            <Star className="w-3 h-3 fill-current" />
                                            Popular
                                        </div>
                                    )}

                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {plan.name}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {plan.description}
                                    </p>

                                    <div className="mb-4">
                                        <span className="text-xs text-muted-foreground">Starting from</span>
                                        <p className="text-lg font-bold text-primary">{plan.minPremium}</p>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {plan.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="text-sm text-foreground flex items-start gap-2"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                    >
                                        Get Quote <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Choose HDFC Life */}
            <section className="section-padding bg-gradient-to-br from-secondary/20 to-primary/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Trust & Excellence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                            Why Choose HDFC Life?
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            India's leading private life insurance company with a legacy of trust and customer-first approach.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseStats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-7 h-7 text-primary" />
                                </div>
                                <span className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    {stat.value}
                                </span>
                                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">100% Online Process</h3>
                            <p className="text-muted-foreground">Buy your policy online without any paperwork or agent visits. Quick and hassle-free.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Wallet className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Tax Benefits</h3>
                            <p className="text-muted-foreground">Save up to ₹46,800* in taxes under Section 80C with our insurance plans.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Expert Assistance</h3>
                            <p className="text-muted-foreground">Get personalized guidance from our experienced advisors to choose the right plan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-secondary via-primary to-secondary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
                        Not Sure Which Plan is Right for You?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8">
                        Let me help you find the perfect insurance solution tailored to your needs, goals, and budget. Get a free consultation today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                        >
                            Schedule a Free Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InsurancePlans;
