import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/utils/cn';
import { Check, LayoutDashboard, MoreHorizontal, Shield, UserCheck, Users, X } from 'lucide-react';

const mockUsers = [
  { id: 'MSD1029', name: 'Ravi Kumar', registered: '10 Mar 2026', status: 'Pending Verification', reported: false },
  { id: 'MSD1030', name: 'Priya Dev', registered: '09 Mar 2026', status: 'Verified', reported: false },
  { id: 'MSD1031', name: 'Sathish M', registered: '08 Mar 2026', status: 'Pending Verification', reported: true },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-8 gap-6 bg-gray-50">
      
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <Card className="border-0 shadow-md h-full">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary"><Shield size={24} /></div>
            <div>
              <h3 className="font-bold text-gray-800">Admin Panel</h3>
            </div>
          </div>
          <nav className="p-4 space-y-1 text-sm font-medium">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg">
              <LayoutDashboard size={18} /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <UserCheck size={18} /> Profile Verification
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Users size={18} /> Manage Users
            </a>
          </nav>
        </Card>
      </aside>

      <main className="flex-grow space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile Verification & Moderation</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-500 mb-1">Pending Verifications</p>
              <h3 className="text-3xl font-bold text-gray-800">42</h3>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-500 mb-1">Verified Users</p>
              <h3 className="text-3xl font-bold text-gray-800">1,204</h3>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-500 mb-1">Reported Profiles</p>
              <h3 className="text-3xl font-bold text-gray-800">7</h3>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-md bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Recent Users (Moderation UI)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-y border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-medium">Profile ID</th>
                    <th className="px-6 py-4 font-medium">User Details</th>
                    <th className="px-6 py-4 font-medium">Registered Date</th>
                    <th className="px-6 py-4 font-medium">Status / Badges</th>
                    <th className="px-6 py-4 font-medium text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mockUsers.map((user, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">{user.id}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-800">{user.name}</div>
                        {user.reported && <span className="text-xs text-red-600 font-semibold mt-1 inline-block">Flagged / Reported</span>}
                      </td>
                      <td className="px-6 py-4 text-gray-500">{user.registered}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-xs font-semibold",
                          user.status === 'Verified' ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        )}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {user.status !== 'Verified' && (
                            <Button size="icon" className="h-8 w-8 bg-green-50 hover:bg-green-100 text-green-600 rounded">
                              <Check size={16} />
                            </Button>
                          )}
                          <Button size="icon" variant="outline" className="h-8 w-8 border-gray-200 text-gray-500 hover:bg-gray-100 rounded">
                            <MoreHorizontal size={16} />
                          </Button>
                          <Button size="icon" variant="outline" className="h-8 w-8 border-red-200 text-red-600 hover:bg-red-50 rounded">
                            <X size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>

    </div>
  );
}
