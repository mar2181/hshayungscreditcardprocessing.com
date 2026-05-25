import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-bold text-white mb-3">HS <span className="text-amber-400">Hayungs</span></div>
          <p className="text-sm">Lower rates, better service, smarter processing for businesses of all sizes.</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Contact</div>
          <div className="space-y-2 text-sm"><div className="flex items-center gap-2"><Phone className="h-4 w-4"/> (555) 123-4567</div><div className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@hshayungs.com</div><div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Nationwide Service</div></div>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Company</div>
          <div className="space-y-2 text-sm"><a href="#" className="hover:text-amber-400">About</a><br/><a href="#" className="hover:text-amber-400">Careers</a><br/><a href="#" className="hover:text-amber-400">Privacy</a></div>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Hours</div>
          <div className="text-sm">Mon – Fri: 8am – 8pm EST<br/>Sat: 9am – 5pm EST<br/>24/7 Emergency Support</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-900 text-sm text-center">© {new Date().getFullYear()} HS Hayungs. All rights reserved.</div>
    </footer>
  );
}
