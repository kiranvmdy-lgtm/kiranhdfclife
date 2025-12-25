import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  TrendingUp,
  Award,
  Heart,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import kiranPhoto from "@/assets/kiran-photo.jpg";
import heroFamily from "@/assets/hero-family.jpg";
import slideRetirement from "@/assets/slide-retirement.jpg";
import slideEducation from "@/assets/slide-education.jpg";
import slidePartnership from "@/assets/slide-partnership.jpg";

const Index = () => {
  const heroSlides = [
    {
      image: heroFamily,
      title: "Protect What Matters Most",
      subtitle: "Comprehensive life insurance solutions for your family's future",
    },
    {
      image: slideRetirement,
      title: "Secure Your Retirement",
      subtitle: "Plan today for a worry-free tomorrow with HDFC Life",
    },
    {
      image: slideEducation,
      title: "Invest in Dreams",
      subtitle: "Education plans that secure your child's bright future",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Financial Security",
      description:
        "Protect your loved ones with comprehensive life coverage that ensures their financial stability.",
    },
    {
      icon: TrendingUp,
      title: "Wealth Creation",
      description:
        "Grow your wealth with investment-linked insurance plans that offer attractive returns.",
    },
    {
      icon: Users,
      title: "Family Protection",
      description:
        "From child education to retirement, we have plans for every life stage.",
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description:
        "HDFC Life is one of India's most trusted insurance providers with millions of satisfied customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        {/* Header with branding and photo */}
        <div className="bg-gradient-to-r from-primary via-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left - Branding */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                  Kiran@HDFC Life
                </h1>
                <p className="text-lg text-primary-foreground/90 mt-1">
                  For all your life insurance needs
                </p>
                <p className="text-sm text-primary-foreground/80 mt-2">
                  Area Business Manager | HDFC Life Insurance
                </p>
              </div>

              {/* Right - Photo */}
              <div className="relative">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-accent overflow-hidden shadow-xl animate-float">
                  <img
                    src={kiranPhoto}
                    alt="Kiran - Area Business Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Carousel */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <ImageCarousel slides={heroSlides} />
        </div>
      </section>

      {/* About HDFC Life Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About HDFC Life
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                India's Leading Life Insurance Provider
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                HDFC Life Insurance Company Limited is one of India's leading
                private life insurance companies, offering a range of individual
                and group insurance solutions that meet various customer needs
                such as Protection, Pension, Savings, Investment, Annuity and
                Health.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong presence across India and a commitment to
                innovation, HDFC Life has been at the forefront of providing
                comprehensive insurance solutions to millions of families,
                helping them secure their financial future.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/life-insurance"
                  className="btn-hero flex items-center gap-2"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Branches Nationwide" },
                { number: "60M+", label: "Lives Covered" },
                { number: "98%", label: "Claim Settlement" },
                { number: "20+", label: "Years of Trust" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card-elevated text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                    {stat.number}
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

      {/* Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Your Trusted Partner in Protection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-elevated group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slidePartnership})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-primary/90" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join millions of Indians who trust HDFC Life for their life
            insurance needs. Start your journey towards financial security
            today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn-hero flex items-center gap-2">
              View Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/career"
              className="btn-outline-hero flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
