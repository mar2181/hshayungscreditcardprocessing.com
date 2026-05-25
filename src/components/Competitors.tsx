import React from 'react';
import { TrendingDown } from 'lucide-react';
const list = [
  {name:'Chase', save:'up to 35%'},
  {name:'Square', save:'up to 28%'},
  {name:'Stripe', save:'up to 32%'},
  {name:'Fiserv', save:'up to 40%'}
];
export default function Competitors() {
  return (
    <section id="comparison" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">We Outprice the Industry Leaders</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">See how much you could save when you switch from the biggest processors in the market.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map(({name,save}) => (
            <div key={name} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="h-14 w-14 bg-slate-900 rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">{name[0]}</div>
              <h3 className="text-lg font-bold text-slate-900">{name}</h3>
              <p className="text-sm text-slate-500 mt-1">Typical markup: High</p>
              <div className="mt-4 inline-flex items-center gap-1 text-green-700 font-bold bg-green-50 px-3 py-1 rounded-full text-sm"><TrendingDown className="h-4 w-4"/> Save {save}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
