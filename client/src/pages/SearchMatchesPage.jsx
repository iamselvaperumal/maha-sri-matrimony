import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookMarked, Briefcase, GraduationCap, Heart, MapPin } from 'lucide-react';
import { useState } from 'react';

const mockProfiles = [
  {
    id: 1,
    name: 'Priya Devangar',
    age: 26,
    height: '5\'4"',
    education: 'M.Sc Computer Science',
    occupation: 'Software Engineer',
    location: 'Coimbatore, Tamil Nadu',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    maritalStatus: 'Never Married',
  },
  {
    id: 2,
    name: 'Deepa S',
    age: 28,
    height: '5\'6"',
    education: 'MBA HR',
    occupation: 'HR Manager',
    location: 'Chennai, Tamil Nadu',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
    maritalStatus: 'Never Married',
  },
  {
    id: 3,
    name: 'Lakshmi K',
    age: 25,
    height: '5\'2"',
    education: 'B.Com',
    occupation: 'Banker',
    location: 'Madurai, Tamil Nadu',
    photo: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80',
    maritalStatus: 'Never Married',
  }
];

export default function SearchMatchesPage() {
  const [profiles, setProfiles] = useState(mockProfiles);

  return (
    <div className="flex-grow bg-gray-50 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-8 gap-6">
      {/* Sidebar Filter Panel */}
      <aside className="w-full md:w-80 flex-shrink-0">
        <Card className="sticky top-24 shadow-md border-0 bg-white">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6 text-primary border-b pb-2">Advanced Search</h2>
            
            <div className="space-y-6">
              {/* Age Range */}
              <div className="space-y-2">
                <Label>Age Range</Label>
                <div className="flex gap-2 items-center">
                  <Input type="number" placeholder="From" defaultValue={21} className="w-full" />
                  <span className="text-muted-foreground">-</span>
                  <Input type="number" placeholder="To" defaultValue={35} className="w-full" />
                </div>
              </div>

              {/* Height Range */}
              <div className="space-y-2">
                <Label>Height Range</Label>
                <div className="flex gap-2 items-center">
                  <select className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option>4' 10"</option>
                    <option>5' 0"</option>
                    <option>5' 5"</option>
                  </select>
                  <span className="text-muted-foreground">-</span>
                  <select className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option>6' 0"</option>
                    <option>6' 5"</option>
                  </select>
                </div>
              </div>

              {/* Marital Status */}
              <div className="space-y-2">
                <Label>Marital Status</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option>Any</option>
                  <option>Never Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <Label>Education</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option>Any Education</option>
                  <option>B.Tech / B.E</option>
                  <option>M.Tech / M.E</option>
                  <option>MBA</option>
                  <option>B.Com / B.Sc</option>
                  <option>MBBS / MD</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label>Location</Label>
                <Input type="text" placeholder="e.g. Coimbatore" />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium">
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </aside>

      {/* Main Results Area */}
      <main className="flex-grow">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Available Matches <span className="text-primary text-lg">({profiles.length})</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow border-0 bg-white group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={profile.photo} 
                  alt={profile.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-primary">
                  {profile.maritalStatus}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h3>
                <p className="text-sm font-medium text-gray-500 mb-4">{profile.age} Yrs • {profile.height}</p>
                
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex gap-2 items-center">
                    <GraduationCap size={16} className="text-muted-foreground" />
                    <span className="truncate">{profile.education}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Briefcase size={16} className="text-muted-foreground" />
                    <span className="truncate">{profile.occupation}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin size={16} className="text-muted-foreground" />
                    <span className="truncate">{profile.location}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full">
                    <Heart size={16} className="mr-2" /> Send Interest
                  </Button>
                  <Button variant="outline" className="px-3 rounded-full border-gray-200">
                    <BookMarked size={16} className="text-gray-500" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
