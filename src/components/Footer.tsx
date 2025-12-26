import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              Kiran@HDFC Life
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              For all your life insurance needs. Securing your family's future
              with trusted insurance solutions from HDFC Life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Life Insurance", "Products", "Career", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={
                        link === "Home"
                          ? "/"
                          : `/${link.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-secondary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Term Life Insurance</li>
              <li>Savings Plans</li>
              <li>Retirement Plans</li>
              <li>Child Plans</li>
              <li>Health Insurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-sm">
                  HDFC Life Insurance Co Ltd, 6th Floor, Centenary Building, MG
                  Road, Bangalore – 560001
                </span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-sm">+91 90359 05406</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-sm">kiran.v@hdfclife.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Kiran@HDFC Life. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-secondary-foreground/70">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
              for securing your future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
