import React from 'react';
import { Trees, Mail, MapPin, ArrowUp, ShieldCheck, Phone, Briefcase } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slatepro-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-finara-700 flex items-center justify-center text-finara-300 shadow-md">
                <Trees className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                FINARA PROPERTY SOLUTIONS LLC
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Dedicated to speed, compliance, and quality for property owners, asset managers, and commercial clients in Buffalo, NY & Surrounding Areas. Specialized landscaping & grounds care.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-finara-400 shrink-0" />
                <a href="tel:7162748090" className="hover:text-white font-bold text-finara-300 transition-colors">
                  (716) 274-8090 (Direct Line)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-finara-400 shrink-0" />
                <a href="tel:7162749914" className="hover:text-white font-medium transition-colors">
                  716-274-9914 (Vendor Inquiries)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-finara-400 shrink-0" />
                <a href="mailto:info@finaraprosolutions.com" className="hover:text-white transition-colors">
                  info@finaraprosolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-finara-400 shrink-0" />
                <span>Buffalo, NY & Surrounding Areas</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-finara-400 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Licensed, Insured & NY State Compliant</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-finara-400 transition-colors">Landscaping Services</a></li>
              <li><a href="#why-us" className="hover:text-finara-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-finara-400 transition-colors">Our 4-Step Process</a></li>
              <li><a href="#showcase" className="hover:text-finara-400 transition-colors">Project Showcase</a></li>
              <li><a href="#service-area" className="hover:text-finara-400 transition-colors">Buffalo Service Area</a></li>
              <li><a href="#contact" className="hover:text-finara-400 transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Col 3: Landscaping Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Precision Lawn Mowing & Edging</li>
              <li>• Mulching & Garden Bed Edging</li>
              <li>• Landscape Design & Flower Beds</li>
              <li>• Spring & Fall Leaf Cleanups</li>
              <li>• Bush, Hedge & Shrub Trimming</li>
              <li>• Commercial Grounds Preservation</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FINARA PROPERTY SOLUTIONS LLC. All rights reserved. Buffalo, NY.</p>
          <div className="flex items-center gap-6">
            <span>Specialized Landscaping & Grounds Maintenance</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-finara-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
