import React from 'react';
import { ArrowRight, TrendingDown, Shield, Clock, Zap } from 'lucide-react';
import { Button } from './ui/button';
export default function Hero() {
  const go = () => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' });
  const items = [
    {icon: TrendingDown, t: 'Up to 40% Savings', d: 'vs major processors'},
    {icon: Shield, t: 'No Hidden Fees', d: 'Transparent pricing'},
    {icon: Clock, t: '24/7 Support', d: 'Dedicated account team'},
    {icon: Zap, t: 'Fast Setup', d: 'Start in 48 hours'}
  ];
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <img src="https://v3b.fal.media/files/b/0a9aa4a6/ntlRSwtcuTolC0iq27FEG_87f1ce66cad441169b86f8beb0c1eb42.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Lower Rates.<br/>Better Service.<br/><span className="text-amber-400">Smarter Processing.</span></h1>
            <p className="text-lg text-slate-300 max-w-xl">Stop overpaying on credit card fees. HS Hayungs helps businesses of all sizes—especially large companies—save thousands every month with transparent rates and dedicated support.</p>
            <Button onClick={go} size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8">Get a Free Rate Quote <ArrowRight className="ml-2 h-5 w-5"/></Button>
          </div>
          <div className="hidden lg:block bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
            <div className="grid grid-cols-2 gap-6">
              {items.map(({icon:I,t,d}) => <div key={t} className="flex items-start gap-3"><I className="h-6 w-6 text-amber-400 shrink-0"/><div><div className="font-semibold text-white">{t}</div><div className="text-sm text-slate-400">{d}</div></div></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
