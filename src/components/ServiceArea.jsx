import React from 'react';
import { MapPin, Navigation, ShieldCheck, Check, Phone } from 'lucide-react';

const locations = [
  'City of Buffalo (Downtown, Elmwood, North Buffalo)',
  'Amherst & Williamsville',
  'Cheektowaga & Depew',
  'Tonawanda & Kenmore',
  'West Seneca & Lackawanna',
  'Orchard Park & Hamburg',
  'Clarence & East Amherst',
  'Niagara Falls & Grand Island'
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-white bg-pattern-grid-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-slate-200 bg-white shadow-soft p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finara-100 text-finara-800 text-xs font-bold tracking-wider uppercase">
                Regional Service Coverage
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Proudly Serving Buffalo, NY & Western New York
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Headquartered to service the entire greater Buffalo metropolitan area, <strong>FINARA PROPERTY SOLUTIONS LLC</strong> provides dependable, scheduled grounds keeping and landscape preservation across Erie County and surrounding regions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {locations.map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-finara-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <MapPin className="w-4 h-4 text-finara-700" />
                  Buffalo, NY & Surrounding Areas
                </span>
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Phone className="w-4 h-4 text-finara-700" />
                  Call: (716) 274-8090
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slatepro-900 to-slate-900 text-white rounded-2xl p-7 shadow-xl space-y-5 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-finara-500/20 flex items-center justify-center text-finara-400">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Rapid Dispatch Crews</h4>
                    <p className="text-xs text-finara-300">Erie County & WNY Regional Support</p>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4 space-y-3 text-xs text-slate-300">
                  <p>
                    ✓ <strong className="text-white">Recurring Contracts:</strong> Weekly & bi-weekly lawn mowing schedules.
                  </p>
                  <p>
                    ✓ <strong className="text-white">Overgrowth & Violations:</strong> Fast lawn remediation to clear municipal notices.
                  </p>
                  <p>
                    ✓ <strong className="text-white">Vendor & Asset Line:</strong> Direct coordination for bank/REO/commercial managers.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="block w-full text-center bg-finara-600 hover:bg-finara-500 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md"
                  >
                    Request Service In Your Area
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
