import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Trees, ChevronRight, Clock, ShieldCheck, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro-bar */}
      <div className="bg-slatepro-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
            <a 
              href="tel:7162748090"
              className="flex items-center gap-1.5 text-finara-300 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-finara-400" />
              <span>(716) 274-8090</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href="tel:7162749914"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              title="Vendor & Asset Inquiries"
            >
              <Briefcase className="w-3.5 h-3.5 text-finara-400" />
              <span>Vendor Line: 716-274-9914</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-finara-400" />
              <span>Buffalo, NY & Surrounding Areas</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:info@finaraprosolutions.com" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-finara-400" />
              <span>info@finaraprosolutions.com</span>
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-finara-400 font-semibold tracking-wide">
              Dedicated Grounds Care
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-finara-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Trees className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg sm:text-xl tracking-tight leading-tight">
                  <span className="text-slate-900">FINARA </span>
                  <span className="text-finara-500">PROPERTY SOLUTIONS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  Landscaping & Grounds Maintenance • Buffalo, NY
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-finara-700 transition-colors">Services</a>
              <a href="#why-us" className="hover:text-finara-700 transition-colors">Why Choose Us</a>
              <a href="#process" className="hover:text-finara-700 transition-colors">Process</a>
              <a href="#showcase" className="hover:text-finara-700 transition-colors">Work Showcase</a>
              <a href="#service-area" className="hover:text-finara-700 transition-colors">Buffalo Area</a>
              <a href="#contact" className="hover:text-finara-700 transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:7162748090"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-finara-600" />
                <span>(716) 274-8090</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-finara-500 hover:bg-finara-600 text-slate-950 px-5 py-2.5 rounded-lg font-extrabold text-xs transition-all duration-200 shadow-sm shadow-amber-500/20 group"
              >
                <span>Request Free Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-finara-50 hover:text-finara-800"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-finara-50 hover:text-finara-800"
            >
              Why Choose Us
            </a>
            <a
              href="#process"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-finara-50 hover:text-finara-800"
            >
              Process
            </a>
            <a
              href="#showcase"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-finara-50 hover:text-finara-800"
            >
              Work Showcase
            </a>
            <a
              href="#service-area"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-finara-50 hover:text-finara-800"
            >
              Buffalo Area Coverage
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-finara-50 hover:text-finara-800"
            >
              Contact & Estimates
            </a>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="tel:7162748090"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-300 font-semibold text-slate-700 text-sm"
              >
                <Phone className="w-4 h-4 text-finara-600" />
                <span>Direct: (716) 274-8090</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-3 rounded-lg font-black text-sm transition-all text-center shadow-md shadow-amber-500/25"
              >
                <span>Request Free Estimate</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
