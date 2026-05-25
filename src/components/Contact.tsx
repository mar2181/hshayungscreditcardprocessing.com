import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send } from 'lucide-react';
export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Your Free Rate Quote</h2>
            <p className="text-slate-600 mb-6">Fill out the form and our team will analyze your current statement to show exactly how much you can save—no obligation, no pressure.</p>
            <div className="space-y-4">
              {[
                {n:'1',t:'Submit your info',d:'Takes less than 60 seconds.'},
                {n:'2',t:'Free statement audit',d:'We analyze your current processor fees.'},
                {n:'3',t:'Receive your savings report',d:'See your exact monthly and annual savings.'}
              ].map(s => <div key={s.n} className="flex items-start gap-4"><div className="h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center text-amber-400 font-bold">{s.n}</div><div><div className="font-semibold text-slate-900">{s.t}</div><div className="text-sm text-slate-500">{s.d}</div></div></div>)}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
            {sent ? <div className="text-center py-12"><div className="text-2xl font-bold text-slate-900 mb-2">Thank you!</div><p className="text-slate-600">A dedicated rep will contact you within 24 hours.</p></div> :
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1"><Label htmlFor="name">Name</Label><Input id="name" required/></div>
                <div className="space-y-1"><Label htmlFor="email">Email</Label><Input id="email" type="email" required/></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" required/></div>
                <div className="space-y-1"><Label htmlFor="company">Business Name</Label><Input id="company" required/></div>
              </div>
              <div className="space-y-1"><Label htmlFor="volume">Monthly Processing Volume</Label><Input id="volume" placeholder="e.g. $100,000"/></div>
              <div className="space-y-1"><Label htmlFor="message">How can we help?</Label><Textarea id="message" rows={3}/></div>
              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold">Send My Quote Request <Send className="ml-2 h-4 w-4"/></Button>
            </form>}
          </div>
        </div>
      </div>
    </section>
  );
}
