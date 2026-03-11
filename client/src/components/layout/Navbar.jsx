import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="font-bold text-2xl text-primary tracking-tight">Maha Sri Devangar</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/search" className="text-foreground hover:text-primary transition-colors font-medium">Search Matches</Link>
            <Link to="/success-stories" className="text-foreground hover:text-primary transition-colors font-medium">Success Stories</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="font-medium text-foreground hover:text-primary">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">Register Free</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
