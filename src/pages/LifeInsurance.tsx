import { Link } from "react-router-dom";
import {
  Shield,
  Heart,
  Wallet,
  GraduationCap,
  Clock,
  Umbrella,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LifeInsurance = () => {
  const insuranceTypes = [
    {
      icon: Shield,
      title: "Term Life Insurance",
      description:
        "Pure protection plan that provides financial security to your family at affordable premiums.",
      benefits: [
        "High coverage at low cost",
        "Income replacement for dependents",
        "Tax benefits under 80C & 10(10D)",
        "Critical illness riders available",
      ],
    },
    {
      icon: Wallet,
      title: "Savings Plans",
      description:
        "Combination of insurance and savings that helps you build wealth over time.",
      benefits: [
        "Guaranteed returns",
        "Life cover throughout policy term",
        "Maturity benefits",
        "Bonus accumulation",
      ],
    },
    {
      icon: Clock,
      title: "Retirement Plans",
      description:
        "Pension plans that ensure a steady income post-retirement for a comfortable life.",
      benefits: [
        "Regular pension after retirement",
        "Lump sum on maturity",
        "Spouse continuation benefits",
        "Flexible payout options",
      ],
    },
    {
      icon: GraduationCap,
      title: "Child Plans",
      description:
        "Secure your child's future education and milestones with dedicated child plans.",
      benefits: [
        "Education fund at key milestones",
        "Waiver of premium on parent's demise",
        "Continues even after unfortunate event",
        "Flexible withdrawal options",
      ],
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description:
        "Comprehensive health coverage for medical emergencies and treatments.",
      benefits: [
        "Hospitalization coverage",
        "Day care procedures",
        "Pre and post hospitalization",
        "No-claim bonus",
      ],
    },
    {
      icon: Umbrella,
      title: "ULIPs",
      description:
        "Unit Linked Insurance Plans offering insurance with investment benefits.",
      benefits: [
        "Market-linked returns",
        "Fund switching options",
        "Partial withdrawal facility",
        "Tax benefits on investment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Understanding Life Insurance
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Protect Your Family's Future
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Life insurance is not just a policy; it's a promise to your loved
            ones that they will be financially secure no matter what life
            brings. Discover the right coverage for your needs.
          </p>
        </div>
      </section>

      {/* What is Life Insurance */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                What is Life Insurance?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Life insurance is a contract between you and an insurance
                company where, in exchange for premium payments, the insurer
                provides a lump-sum payment (death benefit) to beneficiaries
                upon the insured's death.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond just death benefits, modern life insurance policies offer
                savings, investment, retirement planning, and health coverage
                components, making them versatile financial tools.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">
                  Key Benefits of Life Insurance:
                </h3>
                {[
                  "Financial security for dependents",
                  "Tax benefits under Section 80C and 10(10D)",
                  "Wealth creation through long-term savings",
                  "Peace of mind for the family",
                  "Loan facility against policy",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Coverage Types", value: "6+" },
                { label: "Claim Settlement", value: "98%" },
                { label: "Max Coverage", value: "₹5 Cr+" },
                { label: "Min Premium", value: "₹500/mo" },
              ].map((stat, index) => (
                <div key={index} className="card-elevated text-center p-8">
                  <span className="text-3xl font-display font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Life Insurance */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Product Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Types of Life Insurance
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose from our comprehensive range of life insurance products
              designed to meet your specific needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((type, index) => (
              <div key={index} className="card-elevated group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <type.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get in touch with me today and let me help you find the perfect
            insurance plan for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/insurance-plans"
              className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              View All Insurance Plans
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline-hero">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifeInsurance;
