import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, UserPlus, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-tr from-primary/90 to-primary/60 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Find Your Perfect Match in the Devangar Community
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 mb-10 drop-shadow-md"
          >
            Join thousands of happy couples who found their soulmates through Maha Sri Devangar Matrimony.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/register">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-full w-full sm:w-auto font-semibold">
                Register Free Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <UserPlus size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
              <p className="text-muted-foreground">Register and create your detailed matrimony profile for free.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Matches</h3>
              <p className="text-muted-foreground">Search and filter through verified profiles to find your ideal match.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">Send interests and start a conversation with your potential life partner.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Matrimony Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80" alt="Indian Wedding Couple" className="rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Maha Sri Devangar?</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">100% Verified Profiles</h4>
                  <p className="text-muted-foreground">Every profile is manually screened and verified before going live.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Largest Devangar Community</h4>
                  <p className="text-muted-foreground">We have the largest database of brides and grooms from the Devangar community.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit text-primary">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Premium Matchmaking</h4>
                  <p className="text-muted-foreground">Advanced search algorithms to find the most compatible matches based on your preferences.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
