import React from 'react';
import { TrendingDown, Eye, MessageSquare, Zap } from 'lucide-react';
const items = [
  {icon: TrendingDown, title: 'Lower Rates', desc: 'We beat Chase, Square, Stripe, and Fiserv on pricing—guaranteed. Our partners save up to 40% monthly.'},
  {icon: Eye, title: 'No Hidden Fees', desc: 'What you see is what you pay. No setup costs, no PCI fees, no statement surprises.'},
  {icon: MessageSquare, title: 'Dedicated Support', desc: 'A real account manager who answers your call. Personal service for every client.'},
  {icon: Zap, title: 'Fast Setup', desc: 'Get approved and processing in as little as 48 hours with minimal paperwork.'}
];
export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Businesses Choose HS Hayungs</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">We combine industry-leading rates with white-glove service to deliver an experience the big processors cannot match.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({icon:I,title,desc}) => (
            <div key={title} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-amber-400 transition-colors">
              <div className="h-12 w-12 flex items-center justify-center bg-slate-900 rounded-lg mb-4"><I className="h-6 w-6 text-amber-400"/></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
