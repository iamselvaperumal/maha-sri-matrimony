import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Eye, Heart, LogOut, MessageCircle, Search, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const sidebarItems = [
  { icon: User, label: 'My Profile', href: '/profile/me' },
  { icon: Search, label: 'Search Matches', href: '/search' },
  { icon: Heart, label: 'Interest Requests', href: '/interests' },
  { icon: Eye, label: 'Shortlisted Profiles', href: '/interests?tab=shortlisted' },
  { icon: MessageCircle, label: 'Messages', href: '/messages' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function DashboardPage() {
  return (
    <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-8 gap-6 bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <Card className="border-0 shadow-md">
          <div className="p-6 border-b border-gray-100 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-primary/20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80')" }}></div>
            <h3 className="mt-4 font-bold text-lg text-gray-800">Karthik R</h3>
            <p className="text-sm text-muted-foreground">MSD-10293</p>
          </div>
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item, idx) => (
              <Link 
                key={idx} 
                to={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-destructive rounded-lg hover:bg-red-50 transition-colors mt-4">
              <LogOut size={18} />
              Logout
            </button>
          </nav>
        </Card>
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-grow space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome back, Karthik!</h1>

        {/* Profile Completion Widget */}
        <Card className="border-0 shadow-md overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <CardTitle className="text-lg">Profile Completeness</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Add your photos and family details to get more matches.</p>
              </div>
              <div className="text-3xl font-bold text-primary">65%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-5">Complete Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Grid Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-md flex items-center p-6 gap-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Eye size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">24</div>
              <div className="text-sm text-muted-foreground font-medium">Recent Visitors</div>
            </div>
          </Card>

          <Card className="border-0 shadow-md flex items-center p-6 gap-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
              <Heart size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-muted-foreground font-medium">New Interests</div>
            </div>
          </Card>

          <Card className="border-0 shadow-md flex items-center p-6 gap-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
              <Bell size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">5</div>
              <div className="text-sm text-muted-foreground font-medium">Notifications</div>
            </div>
          </Card>
        </div>

        {/* Suggested Matches Widget */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Suggested Matches For You</CardTitle>
              <Link to="/search" className="text-sm font-semibold text-primary hover:underline">View All</Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow relative">
                  <div className="flex items-center gap-4">
                    <img className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" src={`https://images.unsplash.com/photo-${1534528741775 + item}-53994a69daeb?auto=format&fit=crop&w=150&q=80`} alt="Match" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Anitha M</h4>
                      <p className="text-xs text-muted-foreground">25 • 5'3" • MBA</p>
                      <p className="text-xs text-muted-foreground">Coimbatore</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 border-primary/20 text-primary hover:bg-primary/5 rounded-lg">View Profile</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
