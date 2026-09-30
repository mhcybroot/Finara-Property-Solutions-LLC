import React from 'react';
import { Zap, ShieldCheck, CheckCircle, Clock, Award, Users, PhoneCall } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Rapid Response in Buffalo',
    description: 'Quick estimation and lightning-fast dispatch. When your lawn needs emergency overgrown cutback or regular mowing, we mobilize immediately.'
  },
  {
    icon: ShieldCheck,
    title: 'Code Compliance & Safety',
    description: 'We adhere strictly to Buffalo city municipal codes, HOA requirements, and commercial safety guidelines. Fully licensed and insured in NY.'
  },
  {
    icon: Award,
    title: 'Pristine Landscaping Quality',
    description: 'Razor-sharp edging, even blade cutting, weed containment, and complete cleanup on driveways and walkways on every visit.'
  },
  {
    icon: Clock,
    title: 'Consistent Scheduled Service',
    description: 'Dependable recurring grounds maintenance for commercial properties, rental portfolios, and homeowners across Western New York.'
  },
  {
    icon: Users,
    title: 'Trained Groundskeeper Pros',
    description: 'Experienced crews equipped with commercial-grade zero-turn mowers, trimmers, and specialized planting tools.'
  },
  {
    icon: CheckCircle,
    title: 'Transparent Itemized Invoicing',
    description: 'Clear upfront pricing, no hidden fees, and dedicated support for property managers, vendors, and individual owners.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots relative border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finara-100 text-finara-800 text-xs font-bold tracking-wider uppercase">
              Why Finara Property Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Speed, Compliance, and Superior Grounds Quality
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              At <strong>FINARA PROPERTY SOLUTIONS LLC</strong>, we are committed to delivering dependable, high-standard landscaping services throughout Buffalo, NY. We protect and elevate property values with diligent grounds preservation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-finara-50 text-finara-700 flex items-center justify-center shrink-0 font-bold text-lg">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Commercial & Asset Manager Ready</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Equipped to handle high-volume portfolios and single-family estates alike.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-finara-50 text-finara-700 flex items-center justify-center shrink-0 font-bold text-lg">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dedicated Direct & Vendor Lines</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Call (716) 274-8090 for client quotes or 716-274-9914 for vendor coordination.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-finara-500 hover:bg-finara-600 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-md shadow-amber-500/20 transition-all"
              >
                Schedule Service in Buffalo
              </a>
            </div>

            {/* Crew Image Callout */}
            <div className="pt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-sm relative group">
              <img 
                src="/assets/about-team.png" 
                alt="Finara Property Solutions Professional Crew" 
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-semibold text-white">
                  Experienced, insured, and certified grounds specialists in Buffalo, NY.
                </p>
              </div>
            </div>
          </div>

          {/* Right 2x3 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft shadow-hover space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-finara-50 text-finara-700 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
