import React from 'react';
import { Star, BarChart3 } from 'lucide-react';
const reviews = [
  {name:'Marcus T.', role:'CFO, Retail Chain', body:'We reduced our processing costs by 37% in the first month. The dedicated support alone is worth the switch.', vol:'$2.4M monthly volume'},
  {name:'Dana S.', role:'Owner, Hospitality Group', body:'HS Hayungs gave us transparent pricing with zero hidden fees. Finally, a processor that does what they promise.', vol:'$1.8M monthly volume'},
  {name:'James L.', role:'Director of Finance, Logistics', body:'Setup was seamless and we had a dedicated rep from day one. Large companies deserve this level of service.', vol:'$5.1M monthly volume'}
];
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Businesses Processing Millions Monthly</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Join the growing list of companies that have dumped hidden fees and high rates for good.</p>
          </div>
          <div className="flex items-center gap-2 text-amber-400 font-bold text-lg"><BarChart3 className="h-6 w-6"/> <span>$42M+ processed monthly</span></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(({name,role,body,vol}) => (
            <div key={name} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-amber-400"/>)}</div>
              <p className="text-slate-200 leading-relaxed mb-6 text-sm">{body}</p>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white">{name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{role} • {vol}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
