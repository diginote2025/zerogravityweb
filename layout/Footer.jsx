import React from "react";
import Link from "next/link";
// Make sure to install lucide-react: npm install lucide-react
import { Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 text-gray-400 pt-20">
      <div className="max-w-[1250px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-white text-xl mb-4">
            Zerogravityweb <br />
            <small className="text-xs text-gray-500">
              Websites Without Limits
            </small>
          </h2>
          <p className="text-sm leading-relaxed">
            Zerogravityweb builds fast, modern, and scalable websites that help
            brands grow beyond boundaries. From clean UI to powerful performance,
            we craft digital experiences that stand out.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-medium mb-4 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-medium mb-4 uppercase tracking-wider">Pricing</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Website Design</li>
            <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
            <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
            <li className="hover:text-white cursor-pointer transition-colors">Landing Pages</li>
            <li className="hover:text-white cursor-pointer transition-colors">Maintenance</li>
          </ul>
        </div>

        {/* CONTACT & SOCIALS */}
        <div>
          <h3 className="text-white font-medium mb-4 uppercase tracking-wider">Contact</h3>
          <a 
            href="mailto:hello@zerogravityweb.com" 
            className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
          >
            <Mail size={16} className="text-gray-500 group-hover:text-white transition-colors" />
            hello@zerogravityweb.com
          </a>

          <div className="flex gap-4 mt-8">
            <SocialIcon href="https://x.com" icon={<Twitter size={18} />} />
            <SocialIcon href="https://instagram.com" icon={<Instagram size={18} />} />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-16">
        <div className="max-w-[1250px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© {new Date().getFullYear()} Zerogravityweb</p>
          <p className="opacity-50 italic">Build Beyond Gravity</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for Social Icons to keep code DRY
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}