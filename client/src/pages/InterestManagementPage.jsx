import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Clock, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockInterests = [
  { id: 1, name: 'Sathish K', age: 29, occupation: 'Software Architect', type: 'received', status: 'pending', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80' },
  { id: 2, name: 'Ravi M', age: 31, occupation: 'Business Owner', type: 'sent', status: 'pending', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80' },
  { id: 3, name: 'Karthik S', age: 28, occupation: 'Bank Manager', type: 'received', status: 'accepted', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80' },
];

export default function InterestManagementPage() {
  const [activeTab, setActiveTab] = useState('received');

  const filteredInterests = mockInterests.filter(interest => {
    if (activeTab === 'received') return interest.type === 'received' && interest.status === 'pending';
    if (activeTab === 'sent') return interest.type === 'sent' && interest.status === 'pending';
    if (activeTab === 'accepted') return interest.status === 'accepted';
    if (activeTab === 'rejected') return interest.status === 'rejected';
    return true;
  });

  return (
    <div className="flex-grow max-w-5xl mx-auto w-full px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Interest Management</h1>

      <div className="flex space-x-2 border-b border-gray-200 mb-8 overflow-x-auto pb-2">
        {['received', 'sent', 'accepted', 'rejected'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium text-sm capitalize whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            {tab} Interests
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInterests.length > 0 ? (
          filteredInterests.map(interest => (
            <Card key={interest.id} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white overflow-hidden">
              <div className="flex p-4 gap-4">
                <img src={interest.image} alt={interest.name} className="w-20 h-20 rounded-full object-cover border-2 border-primary/20" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{interest.name}</h3>
                  <p className="text-sm text-gray-500">{interest.age} Yrs • {interest.occupation}</p>
                  <Link to={`/profile/${interest.id}`} className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-1">
                    View Profile <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 border-t border-gray-100 flex gap-2">
                {activeTab === 'received' && (
                  <>
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg"><Check size={16} className="mr-2"/> Accept</Button>
                    <Button variant="outline" className="flex-1 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 rounded-lg"><X size={16} className="mr-2"/> Reject</Button>
                  </>
                )}
                {activeTab === 'sent' && (
                  <Button variant="outline" className="w-full text-gray-600 border-gray-200 cursor-default" disabled><Clock size={16} className="mr-2"/> Pending Approval</Button>
                )}
                {activeTab === 'accepted' && (
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg">Send Message</Button>
                )}
                {activeTab === 'rejected' && (
                  <Button variant="outline" className="w-full text-gray-400 border-gray-200 cursor-default" disabled>Declined</Button>
                )}
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-500">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Heart size={40} />
            </div>
            <h3 className="text-xl font-medium mb-2">No {activeTab} interests</h3>
            <p>You don't have any {activeTab} interests at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
