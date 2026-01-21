import { Link } from "react-router-dom";
import {
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import slidePartnership from "@/assets/slide-partnership.jpg";

const Career = () => {
  const careerSlides = [
    {
      image: "/photo image career/1.png",
      title: "Join Our Winning Team",
      subtitle: "Build a successful career with HDFC Life",
    },
    {
      image: "/photo image career/2.png",
      title: "Unlimited Earning Potential",
      subtitle: "Your growth has no limits here",
    },
    {
      image: "/photo image career/3.png",
      title: "Professional Training",
      subtitle: "Learn from industry experts",
    },
    {
      image: "/photo image career/4.png",
      title: "Work-Life Balance",
      subtitle: "Flexible hours, your rules",
    },
    {
      image: "/photo image career/5.png",
      title: "Recognition & Rewards",
      subtitle: "Your efforts are always celebrated",
    },
    {
      image: "/photo image career/6.png",
      title: "Growing Community",
      subtitle: "Join a family of successful advisors",
    },
    {
      image: "/photo image career/7.png",
      title: "Leadership Opportunities",
      subtitle: "Grow into managerial roles",
    },
    {
      image: "/photo image career/8.png",
      title: "Financial Freedom",
      subtitle: "Achieve your financial goals",
    },
    {
      image: "/photo image career/9.png",
      title: "Make a Difference",
      subtitle: "Help families secure their future",
    },
    {
      image: "/photo image career/10.png",
      title: "Start Your Journey Today",
      subtitle: "The best time to begin is now",
    },
  ];

  const businessPartnerAudience = [
    "Freelancers",
    "Businessmen & Women",
    "Real Estate Agents",
    "Photographers & Videographers",
    "Electricians",
    "Tax Consultants & Auditors",
    "Doctors & Lawyers",
    "Housewives",
    "Retired Persons",
  ];

  const financialAdvisorAudience = [
    "Freelancers",
    "Businessmen & Women",
    "Real Estate Agents",
    "Photographers & Videographers",
    "Electricians",
    "Tax Consultants & Auditors",
    "Doctors & Lawyers",
    "Working Men & Women",
    "Housewives",
    "Retired Persons",
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Unlimited Earning Potential",
      description:
        "No cap on your income. The more you grow, the more you earn with attractive commissions and incentives.",
    },
    {
      icon: Clock,
      title: "Flexible Working Hours",
      description:
        "Be your own boss. Work at your convenience and maintain the perfect work-life balance.",
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description:
        "Get comprehensive training from industry experts to become a successful insurance professional.",
    },
    {
      icon: Star,
      title: "Recognition & Rewards",
      description:
        "Top performers get recognized with awards, trips, and exclusive benefits.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slidePartnership})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-primary/90" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Career Opportunities
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-4 mb-6">
            Build Your Career with HDFC Life
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join India's leading life insurance company and unlock unlimited
            earning potential while helping families secure their future.
          </p>
        </div>
      </section>

      {/* Career Image Carousel */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Life at HDFC Life
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Glimpses of Our Journey
            </h2>
          </div>
          <ImageCarousel slides={careerSlides} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Why Partner with HDFC Life?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-elevated text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Options */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Join Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Choose Your Path to Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Partner */}
            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    Business Partner
                  </h3>
                  <span className="text-accent font-semibold">
                    PUC Pass Required
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Become an HDFC Life Business Partner and earn by referring
                customers for life insurance products. Perfect for individuals
                looking for a secondary income source.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Who Can Join?
                </h4>
                <div className="flex flex-wrap gap-2">
                  {businessPartnerAudience.map((audience, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Minimum qualification: PUC Pass",
                  "Attractive referral commissions",
                  "No fixed working hours",
                  "Work from anywhere",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-hero w-full flex items-center justify-center gap-2"
              >
                Apply as Business Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Financial Advisor */}
            <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    Financial Advisor
                  </h3>
                  <span className="text-primary font-semibold">
                    10th Pass Required
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Start your career as a Financial Advisor and help customers make
                informed decisions about their life insurance needs while
                building a rewarding career.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Who Can Join?
                </h4>
                <div className="flex flex-wrap gap-2">
                  {financialAdvisorAudience.map((audience, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-foreground rounded-full text-sm font-medium"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Minimum qualification: 10th Pass",
                  "Higher commission structure",
                  "Comprehensive training program",
                  "Career growth opportunities",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-hero w-full flex items-center justify-center gap-2"
              >
                Apply as Financial Advisor
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Take the first step towards financial independence. Contact me today
            to learn more about these exciting opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Contact Kiran Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
