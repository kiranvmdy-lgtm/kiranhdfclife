import { Link } from "react-router-dom";
import {
  Shield,
  TrendingUp,
  Heart,
  Baby,
  Briefcase,
  ArrowRight,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import heroFamily from "@/assets/hero-family.jpg";
import slideRetirement from "@/assets/slide-retirement.jpg";
import slideEducation from "@/assets/slide-education.jpg";

const Products = () => {
  const productSlides = [
    {
      image: heroFamily,
      title: "Family Protection Plans",
      subtitle: "Comprehensive coverage for your entire family",
    },
    {
      image: slideRetirement,
      title: "Retirement Solutions",
      subtitle: "Secure your golden years with our pension plans",
    },
    {
      image: slideEducation,
      title: "Child Future Plans",
      subtitle: "Invest in your child's dreams today",
    },
  ];

  const products = [
    {
      icon: Shield,
      category: "Protection",
      name: "HDFC Life Click 2 Protect 3D Plus",
      description:
        "Comprehensive term plan with coverage against Death, Disease, and Disability.",
      features: ["Life cover up to 85 years", "Critical illness cover", "Return of premium option"],
      popular: true,
    },
    {
      icon: TrendingUp,
      category: "Investment",
      name: "HDFC Life ProGrowth Plus",
      description:
        "Market-linked investment plan with life insurance benefits.",
      features: ["7 fund options", "Free switching", "Loyalty additions"],
      popular: false,
    },
    {
      icon: Briefcase,
      category: "Savings",
      name: "HDFC Life Sanchay Plus",
      description:
        "Guaranteed income plan with long-term savings and life cover.",
      features: ["Guaranteed additions", "Long-term savings", "Tax benefits"],
      popular: true,
    },
    {
      icon: Baby,
      category: "Child Plan",
      name: "HDFC Life YoungStar Super Premium",
      description:
        "Secure your child's future with education and wealth creation.",
      features: ["Education funding", "Premium waiver benefit", "Flexible payouts"],
      popular: false,
    },
    {
      icon: Heart,
      category: "Health",
      name: "HDFC Life Cancer Care",
      description:
        "Specialized cancer protection plan with comprehensive coverage.",
      features: ["Lump sum on diagnosis", "Income benefit", "Premium waiver"],
      popular: false,
    },
    {
      icon: TrendingUp,
      category: "Retirement",
      name: "HDFC Life Click 2 Retire",
      description:
        "Online pension plan for a comfortable retired life.",
      features: ["Immediate/Deferred annuity", "Joint life option", "Multiple payout options"],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="pt-24 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
              Insurance Solutions for Every Need
            </h1>
          </div>
          <ImageCarousel slides={productSlides} />
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="card-elevated relative group"
              >
                {product.popular && (
                  <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                )}
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center my-4 group-hover:bg-primary transition-colors duration-300">
                  <product.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HDFC Life */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Choose HDFC Life Products?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "98%", label: "Claim Settlement Ratio" },
              { value: "60M+", label: "Lives Insured" },
              { value: "500+", label: "Branches" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <span className="text-4xl md:text-5xl font-display font-bold text-primary">
                  {stat.value}
                </span>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let me help you find the perfect insurance solution tailored to your
            needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
