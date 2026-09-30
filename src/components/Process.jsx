import React from 'react';
import { ClipboardCheck, Calculator, Shovel, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Site Assessment',
    description: 'We survey your property grounds in Buffalo, evaluate grass health, mulch beds, edging requirements, and seasonal factors.'
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Transparent Estimate',
    description: 'We provide an upfront, itemized proposal detailing scope, recurring maintenance options, timeline, and exact pricing.'
  },
  {
    number: '03',
    icon: Shovel,
    title: 'Precision Execution',
    description: 'Our licensed crew arrives on schedule with commercial zero-turn mowers, trimmers, and horticultural tools for immaculate care.'
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Clean Finishing & Care',
    description: 'We blow off paved surfaces, bag or haul all debris, conduct an on-site quality check, and keep your exterior grounds pristine.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white bg-pattern-grid-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finara-100 text-finara-800 text-xs font-bold tracking-wider uppercase">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How We Manage Your Grounds
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A dependable, transparent workflow from initial estimate to immaculate completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={index}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-soft shadow-hover flex flex-col relative group"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-finara-50 text-finara-600 flex items-center justify-center group-hover:bg-finara-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black tracking-tight text-finara-200 group-hover:text-finara-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
