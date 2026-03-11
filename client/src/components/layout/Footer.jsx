import { Facebook, Heart, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 shadow-t-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 fill-white" />
            <span className="font-bold text-xl tracking-tight">Maha Sri Devangar</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            The most trusted matrimony service for the Devangar community. We help you find your perfect life partner.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Membership Plans</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">24x7 Customer Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Maha Sri Devangar Matrimony. All rights reserved.</p>
      </div>
    </footer>
  );
}
