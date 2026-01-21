import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Wallet, Baby, GraduationCap, Home, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhyLifeInsurance = () => {
    const comicStories = [
        {
            id: 1,
            title: "The Sharma Family Story",
            subtitle: "A tale of protection and peace of mind",
            panels: [
                {
                    scene: "panel-1",
                    title: "Meet Rajesh Sharma",
                    description: "A loving father of two, working hard as a software engineer in Bangalore. Life was perfect with his wife Priya and kids Aryan (10) and Ananya (7).",
                    emotion: "😊",
                    bgColor: "from-blue-400 to-blue-600",
                    characters: "👨‍👩‍👧‍👦"
                },
                {
                    scene: "panel-2",
                    title: "The Unexpected Happens",
                    description: "One day, Rajesh met with a serious accident. The family was devastated. Who would take care of the EMIs? The children's education?",
                    emotion: "😰",
                    bgColor: "from-gray-600 to-gray-800",
                    characters: "🏥"
                },
                {
                    scene: "panel-3",
                    title: "The Safety Net",
                    description: "But Rajesh had planned ahead! His HDFC Life term insurance of ₹1 Crore provided immediate financial support to his family.",
                    emotion: "💪",
                    bgColor: "from-green-400 to-green-600",
                    characters: "🛡️"
                },
                {
                    scene: "panel-4",
                    title: "Family Secured",
                    description: "Today, Aryan is an engineer and Ananya is a doctor. Priya lives peacefully knowing Rajesh's love protected them even after he was gone.",
                    emotion: "🌟",
                    bgColor: "from-amber-400 to-orange-500",
                    characters: "👨‍🎓👩‍⚕️"
                }
            ],
            moral: "Life insurance isn't an expense, it's your family's protection when you're not around."
        },
        {
            id: 2,
            title: "Meera's Smart Decision",
            subtitle: "How a young professional secured her parents' future",
            panels: [
                {
                    scene: "panel-1",
                    title: "Young & Independent",
                    description: "Meera, 28, just got her dream job as a marketing manager. Her parents had sacrificed everything for her education.",
                    emotion: "💼",
                    bgColor: "from-purple-400 to-purple-600",
                    characters: "👩‍💼"
                },
                {
                    scene: "panel-2",
                    title: "The Realization",
                    description: "Her parents were aging. What if something happened to her? Who would support them? The thought kept her awake at night.",
                    emotion: "🤔",
                    bgColor: "from-indigo-500 to-indigo-700",
                    characters: "👴👵"
                },
                {
                    scene: "panel-3",
                    title: "Taking Action",
                    description: "Meera bought a term plan with ₹75 Lakh cover. At just ₹8,000/year - less than her monthly shopping budget!",
                    emotion: "✅",
                    bgColor: "from-teal-400 to-teal-600",
                    characters: "📝"
                },
                {
                    scene: "panel-4",
                    title: "Peace of Mind",
                    description: "Now Meera lives freely, travels the world, knowing her parents are protected. Her small investment gave her priceless peace of mind.",
                    emotion: "🌈",
                    bgColor: "from-pink-400 to-rose-500",
                    characters: "✈️🌍"
                }
            ],
            moral: "You don't need to be married to need life insurance. Anyone who has dependents should be protected."
        },
        {
            id: 3,
            title: "The Kapoor's Retirement Dream",
            subtitle: "From worried to wealthy in retirement",
            panels: [
                {
                    scene: "panel-1",
                    title: "The Retirement Fear",
                    description: "At 45, Vikram Kapoor realized he had no retirement savings. His salary covered expenses but left nothing for the future.",
                    emotion: "😟",
                    bgColor: "from-red-400 to-red-600",
                    characters: "👨‍💼💭"
                },
                {
                    scene: "panel-2",
                    title: "Expert Guidance",
                    description: "A friend introduced him to an HDFC Life advisor who explained pension plans and systematic investment options.",
                    emotion: "💡",
                    bgColor: "from-yellow-400 to-yellow-600",
                    characters: "🤝"
                },
                {
                    scene: "panel-3",
                    title: "Smart Planning",
                    description: "Vikram started investing ₹15,000/month in HDFC Life pension plan. It felt like a sacrifice then, but discipline paid off.",
                    emotion: "📈",
                    bgColor: "from-emerald-400 to-emerald-600",
                    characters: "💰"
                },
                {
                    scene: "panel-4",
                    title: "Golden Years",
                    description: "At 60, Vikram retired with a corpus of ₹85 Lakhs and gets ₹45,000/month pension. He now travels with his wife, living his dream!",
                    emotion: "🏖️",
                    bgColor: "from-cyan-400 to-cyan-600",
                    characters: "🌴✨"
                }
            ],
            moral: "It's never too late to start planning for retirement. The best time was yesterday, the next best time is today."
        }
    ];

    const reasons = [
        {
            icon: Shield,
            title: "Financial Protection",
            description: "Replace your income and maintain your family's lifestyle when you're no longer there"
        },
        {
            icon: Home,
            title: "Pay Off Debts",
            description: "Cover home loans, car EMIs, and other debts so your family isn't burdened"
        },
        {
            icon: GraduationCap,
            title: "Children's Education",
            description: "Secure funds for your children's higher education and bright future"
        },
        {
            icon: Stethoscope,
            title: "Medical Emergencies",
            description: "Handle unexpected medical expenses without depleting savings"
        },
        {
            icon: Wallet,
            title: "Retirement Security",
            description: "Build a corpus for your golden years with pension plans"
        },
        {
            icon: Heart,
            title: "Peace of Mind",
            description: "Sleep peacefully knowing your loved ones are financially protected"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-20 bg-gradient-to-br from-primary via-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up">
                        Why Do You Need<br />
                        <span className="text-accent">Life Insurance?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        Real stories of real families. See how life insurance changed their lives forever.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <Link to="/contact" className="btn-hero flex items-center gap-2">
                            Get Protected Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Comic Stories Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Real Life Stories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
                            Stories That Touch Hearts
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            These comic stories are inspired by real families who understood the importance of life insurance. Their decisions protected their loved ones.
                        </p>
                    </div>

                    {/* Comic Stories */}
                    <div className="space-y-20">
                        {comicStories.map((story, storyIndex) => (
                            <div key={story.id} className="relative">
                                {/* Story Title */}
                                <div className="text-center mb-10">
                                    <div className="inline-block bg-primary/10 rounded-full px-6 py-2 mb-4">
                                        <span className="text-primary font-semibold">Story {storyIndex + 1}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-muted-foreground">{story.subtitle}</p>
                                </div>

                                {/* Comic Panels */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {story.panels.map((panel, panelIndex) => (
                                        <div
                                            key={panel.scene}
                                            className="relative group"
                                            style={{ animationDelay: `${panelIndex * 0.1}s` }}
                                        >
                                            {/* Panel Number */}
                                            <div className="absolute -top-4 -left-2 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg">
                                                {panelIndex + 1}
                                            </div>

                                            {/* Comic Panel */}
                                            <div className={`bg-gradient-to-br ${panel.bgColor} rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:-rotate-1`}>
                                                {/* Panel Content */}
                                                <div className="p-6 min-h-[280px] flex flex-col">
                                                    {/* Character/Scene Emoji */}
                                                    <div className="text-5xl mb-4 text-center">
                                                        {panel.characters}
                                                    </div>

                                                    {/* Title */}
                                                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                                        <span>{panel.emotion}</span> {panel.title}
                                                    </h4>

                                                    {/* Description */}
                                                    <p className="text-white/90 text-sm leading-relaxed flex-grow">
                                                        {panel.description}
                                                    </p>
                                                </div>

                                                {/* Comic-style speech bubble tail */}
                                                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Story Moral */}
                                <div className="mt-8 bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
                                    <p className="text-lg font-semibold text-foreground flex items-start gap-3">
                                        <span className="text-2xl">💡</span>
                                        <span><strong>Moral:</strong> {story.moral}</span>
                                    </p>
                                </div>

                                {/* Divider between stories */}
                                {storyIndex < comicStories.length - 1 && (
                                    <div className="mt-16 flex items-center justify-center">
                                        <div className="w-16 h-1 bg-primary/20 rounded-full"></div>
                                        <div className="mx-4">
                                            <Heart className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="w-16 h-1 bg-primary/20 rounded-full"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reasons Section */}
            <section className="section-padding bg-muted">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Key Benefits
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
                            6 Reasons Why Life Insurance is Essential
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="card-elevated group cursor-pointer"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                                    <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                            The Reality Check
                        </h2>
                        <p className="text-primary-foreground/80 mt-2">Numbers that speak louder than words</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { number: "75%", label: "of Indian families are underinsured" },
                            { number: "₹50L", label: "average coverage gap per family" },
                            { number: "92%", label: "claims settled by HDFC Life" },
                            { number: "24hrs", label: "average claim settlement time" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
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

            {/* CTA Section */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-secondary via-secondary to-primary rounded-3xl p-8 md:p-12 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                            Don't Wait for Tomorrow
                        </h2>
                        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                            Every day without life insurance is a risk you take with your family's future.
                            Start today with premiums as low as ₹500/month.
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
                                View Plans
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

export default WhyLifeInsurance;
