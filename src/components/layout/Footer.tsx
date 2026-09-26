import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuArrowRight, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay in the loop
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive offers, new arrivals,
              and style inspiration.
            </p>
            <form className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                placeholder="Enter your email"
                required
                value=""
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  shadow h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
                type="submit">
                <LuArrowRight className="size-4" />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <Link
                className="text-2xl tracking-tight text-gray-900 hover:text-gray-700 transition-colors"
                to="/">
                Cart<span className="text-primary">SHOP</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Discover unique products that inspire your lifestyle. Quality
                craftsmanship meets modern design.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <LuMapPin className="size-4 text-primary" />
                  <span>123 Fashion Street, Style City, SC 12345</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <LuPhone className="size-4 text-primary" />
                  <span>+0 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <LuMail className="size-4 text-primary" />
                  <span>hello@Email.com</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  href="#">
                  <FaFacebookF className="size-4" />
                </a>
                <a
                  aria-label="Twitter"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  href="#">
                  <FaXTwitter className="size-4" />
                </a>
                <a
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  href="#">
                  <FaInstagram className="size-4" />
                </a>
                <a
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  href="#">
                  <FaGithub className="size-4" />
                </a>
              </div>
            </div>
            <div className="">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Shop
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Sale
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Featured
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Customer Care
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Returns & Exchanges
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                   className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    to="/">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
