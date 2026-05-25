import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
const links = ['Benefits','Comparison','Testimonials','Contact'];
export default function Header() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); setOpen(false); };
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white">HS <span className="text-amber-400">Hayungs</span></div>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => <button key={l} onClick={() => go(l.toLowerCase())} className="text-sm text-slate-300 hover:text-amber-400">{l}</button>)}
          <Button onClick={() => go('contact')} className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold">Get a Quote</Button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X size={24}/> : <Menu size={24}/>}</button>
      </div>
      {open && <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-3 space-y-2">{links.map(l => <button key={l} onClick={() => go(l.toLowerCase())} className="block w-full text-left text-slate-300 hover:text-amber-400">{l}</button>)}<Button onClick={() => go('contact')} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold">Get a Quote</Button></div>}
    </header>
  );
}
