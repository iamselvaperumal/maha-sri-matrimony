import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, BookMarked, Briefcase, GraduationCap, Heart, MapPin, Phone, Share2, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProfile = {
  id: 'PR10294',
  name: 'Priya Devangar',
  age: 26,
  height: '5\'4" (162 cm)',
  maritalStatus: 'Never Married',
  religion: 'Hindu',
  caste: 'Devangar',
  motherTongue: 'Tamil',
  location: 'Coimbatore, Tamil Nadu',
  education: 'M.Sc Computer Science',
  occupation: 'Software Engineer',
  income: 'Rs. 10 - 15 Lakhs',
  familyType: 'Nuclear Family',
  fatherStatus: 'Business',
  motherStatus: 'Homemaker',
  about: 'I am a confident, caring, and independent person. I value our culture and traditions while being modern in my outlook. I love traveling, exploring new cafes, and reading books.',
  photos: [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=80'
  ],
  partnerAge: '27 - 31 Years',
  partnerHeight: '5\'7" - 6\'1"',
  partnerEducation: 'Masters/Bachelors',
  partnerOccupation: 'Software / Business',
};

export default function ProfileViewPage() {
  const { id } = useParams();
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 bg-gray-50 flex flex-col lg:flex-row gap-8">
      
      {/* Left Column: Photos & Quick Actions */}
      <div className="w-full lg:w-1/3 flex-shrink-0 space-y-6">
        <Card className="border-0 shadow-lg overflow-hidden bg-white">
          <div className="relative h-[400px]">
            <img src={mockProfile.photos[activePhoto]} alt={mockProfile.name} className="w-full h-full object-cover transition-opacity duration-300" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-lg"><BadgeCheck size={14} className="mr-1 shadow-sm" /> Verified</span>
              <span className="bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">PR {mockProfile.id}</span>
            </div>
          </div>
          <div className="flex p-4 gap-2 overflow-x-auto bg-gray-50 border-t border-gray-100">
            {mockProfile.photos.map((photo, index) => (
              <img 
                key={index} 
                src={photo} 
                alt={`Gallery ${index}`} 
                onClick={() => setActivePhoto(index)}
                className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 transition-all ${activePhoto === index ? 'border-primary ring-2 ring-primary/30 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`} 
              />
            ))}
          </div>
        </Card>

        <Card className="border-0 shadow-md bg-white p-6 grid grid-cols-2 gap-4">
          <Button className="col-span-2 bg-primary hover:bg-primary/90 text-white h-12 text-lg font-semibold rounded-xl" size="lg">
            <Heart size={20} className="mr-2" /> Send Interest
          </Button>
          <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 h-10 rounded-lg">
            <BookMarked size={18} className="mr-2 text-primary" /> Shortlist
          </Button>
          <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 h-10 rounded-lg">
            <Share2 size={18} className="mr-2 text-blue-600" /> Share
          </Button>
          <div className="col-span-2 flex justify-center mt-2">
            <button className="text-gray-400 hover:text-red-600 flex items-center text-sm font-medium transition-colors">
              <ShieldAlert size={14} className="mr-1" /> Report Profile
            </button>
          </div>
        </Card>
      </div>

      {/* Right Column: Profile Details */}
      <div className="flex-grow space-y-6">
        <Card className="border-0 shadow-md bg-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-100">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockProfile.name}</h1>
                <p className="text-gray-500 font-medium">Created by Self • Last online 2 hours ago</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 text-primary border-primary hover:bg-primary hover:text-white transition-colors">
                <Phone size={16} className="mr-2" /> View Phone
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-700 mb-8 font-medium bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/40"></div>{mockProfile.age} Yrs, {mockProfile.height}</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/40"></div>{mockProfile.maritalStatus}</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/40"></div>{mockProfile.religion}, {mockProfile.caste}</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/40"></div>Mother Tongue: {mockProfile.motherTongue}</div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center before:w-1 before:h-6 before:bg-primary before:mr-3 before:rounded-full">About Her</h3>
            <p className="text-gray-600 leading-relaxed mb-10 text-justify">{mockProfile.about}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center before:w-1 before:h-6 before:bg-primary before:mr-3 before:rounded-full">Background</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start">
                    <GraduationCap className="text-gray-400 mt-0.5 shrink-0" size={20} />
                    <div><span className="block text-sm text-gray-500 mb-1">Education</span><span className="font-semibold text-gray-800">{mockProfile.education}</span></div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Briefcase className="text-gray-400 mt-0.5 shrink-0" size={20} />
                    <div><span className="block text-sm text-gray-500 mb-1">Occupation</span><span className="font-semibold text-gray-800">{mockProfile.occupation}</span></div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <MapPin className="text-gray-400 mt-0.5 shrink-0" size={20} />
                    <div><span className="block text-sm text-gray-500 mb-1">Location</span><span className="font-semibold text-gray-800">{mockProfile.location}</span></div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center before:w-1 before:h-6 before:bg-primary before:mr-3 before:rounded-full">Partner Preferences</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="text-gray-500">Age</span>
                    <span className="font-semibold text-gray-800">{mockProfile.partnerAge}</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="text-gray-500">Height</span>
                    <span className="font-semibold text-gray-800">{mockProfile.partnerHeight}</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="text-gray-500">Education</span>
                    <span className="font-semibold text-gray-800">{mockProfile.partnerEducation}</span>
                  </li>
                  <li className="flex justify-between pb-3">
                    <span className="text-gray-500">Occupation</span>
                    <span className="font-semibold text-gray-800 shrink-0 text-right w-1/2">{mockProfile.partnerOccupation}</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
