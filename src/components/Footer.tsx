import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 – Address */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[#D4AF37] uppercase">
              Visit Us
            </h3>
            <p className="mt-3 text-sm text-white/80">
              82 Horne Street,
              <br />
              Campbellfield, VIC, 3061
              <br />
              Australia
            </p>
          </div>

          {/* Column 2 – Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[#D4AF37] uppercase">
              Information
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-white/80">
              <li>
                <a href="/faqs" className="hover:text-[#D4AF37] transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#D4AF37] transition">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#D4AF37] transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#D4AF37] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-[#D4AF37] transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/warranty" className="hover:text-[#D4AF37] transition">
                  Warranty Policy
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#D4AF37] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-[#D4AF37] transition">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 – Subscribe */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[#D4AF37] uppercase">
              Stay Updated
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Get updates on promotions, new arrivals, and exclusive deals.
            </p>

            <form className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full bg-white px-4 py-2 text-sm text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-black hover:bg-[#c39c30] transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 4 – Need Help */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[#D4AF37] uppercase">
              Need Help?
            </h3>
            <div className="mt-3 space-y-1 text-sm text-white/80">
              <p>03 9359 2061</p>
              <p>0430 099 873</p>

              <p className="mt-3 font-semibold text-white">Trading Hours</p>
              <p>Mon – Fri: 7:30am to 5:30pm</p>
              <p>Sat: 7:30am – 3pm</p>
              <p>Sun/Public Holidays: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/60 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {year} Baba Ji Parts. All rights reserved.</p>
          <p className="text-white/50">Powered by BlackCrow Automotive Group.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
