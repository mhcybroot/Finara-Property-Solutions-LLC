import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Brian Kowalski',
    role: 'Commercial Facility Director',
    location: 'Buffalo, NY',
    text: 'Finara Property Solutions has handled our corporate business park grounds with absolute excellence. Crisp edging, weed-free mulch beds, and prompt weekly mowing.',
    rating: 5
  },
  {
    name: 'Jennifer Walsh',
    role: 'Homeowner',
    location: 'Amherst, NY',
    text: 'Their spring yard cleanup and mulch installation completely elevated our curb appeal. The team arrived on time, was very polite, and did a spotless job cleaning up.',
    rating: 5
  },
  {
    name: 'Michael Reynolds',
    role: 'Real Estate Portfolio Manager',
    location: 'Cheektowaga, NY',
    text: 'Speed and compliance are essential for our assets. Finara communicates clearly, provides photographic documentation, and never misses a service window.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 bg-pattern-dots border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finara-100 text-finara-800 text-xs font-bold tracking-wider uppercase">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted Throughout Western New York
          </h2>
          <p className="text-base text-slate-600">
            See how our dedicated landscaping services maintain value and curb presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-soft flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{review.name}</div>
                <div className="text-xs text-finara-600 font-bold">{review.role} • {review.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
