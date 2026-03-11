import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MoreVertical, Phone, Search, Send, Video } from 'lucide-react';
import { useState } from 'react';

const conversations = [
  { id: 1, name: 'Anitha M', lastMessage: 'Hi Karthik, I saw your profile and...', time: '10:30 AM', unread: 2, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', online: true },
  { id: 2, name: 'Priya S', lastMessage: 'Yes, that sounds good. Let us...', time: 'Yesterday', unread: 0, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80', online: false },
];

const messages = [
  { id: 1, senderId: 2, text: 'Hello Karthik, how are you doing?', time: '10:00 AM' },
  { id: 2, senderId: 1, text: 'Hi Anitha! I am doing great, thanks for asking. How about you?', time: '10:05 AM' },
  { id: 3, senderId: 2, text: 'I am doing well too. I saw your profile and it seems we share similar interests.', time: '10:15 AM' },
  { id: 4, senderId: 2, text: 'Would you be interested in getting to know each other better?', time: '10:16 AM' },
  { id: 5, senderId: 1, text: 'Yes, definitely! I would love to.', time: '10:30 AM' },
];

export default function MessagingPage() {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');

  return (
    <div className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 h-[calc(100vh-80px)]">
      <Card className="flex h-full border-0 shadow-xl overflow-hidden rounded-2xl bg-white">
        
        {/* Left Side: Conversation List */}
        <div className="w-full md:w-1/3 border-r border-gray-100 flex flex-col bg-gray-50/50">
          <div className="p-4 border-b border-gray-100 bg-white">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input type="text" placeholder="Search a match..." className="pl-10 h-10 bg-gray-50 border-gray-200 rounded-full" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto w-full">
            {conversations.map((conv) => (
              <div 
                key={conv.id}
                onClick={() => setActiveChat(conv)}
                className={`flex gap-4 p-4 cursor-pointer hover:bg-gray-100 transition-colors border-l-4 ${activeChat.id === conv.id ? 'border-primary bg-primary/5' : 'border-transparent'}`}
              >
                <div className="relative">
                  <img src={conv.image} alt={conv.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                  {conv.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">{conv.name}</h3>
                    <span className="text-xs text-gray-400">{conv.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className={`text-sm truncate ${conv.unread > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>{conv.lastMessage}</p>
                    {conv.unread > 0 && <span className="bg-primary text-white text-xs font-bold w-5 h-5 flex justify-center items-center rounded-full flex-shrink-0">{conv.unread}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Message Window */}
        <div className="hidden md:flex flex-col flex-1 bg-white relative">
          {/* Main header block */}
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="h-20 border-b border-gray-100 flex items-center justify-between px-6 bg-white/95 backdrop-blur z-10 sticky top-0">
                <div className="flex items-center gap-4">
                  <img src={activeChat.image} alt={activeChat.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{activeChat.name}</h3>
                    <p className="text-xs text-primary font-medium">{activeChat.online ? 'Online' : 'Offline'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full"><Phone size={20} /></Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full"><Video size={20} /></Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 rounded-full"><MoreVertical size={20} /></Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50/30">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col ${msg.senderId === 1 ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[70%] px-5 py-3 rounded-2xl shadow-sm ${msg.senderId === 1 ? 'bg-primary text-white rounded-br-none' : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none'}`}>
                      {msg.text}
                    </div>
                    <span className="text-xs text-gray-400 mt-1 mx-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex items-center gap-2 max-w-4xl mx-auto">
                  <Input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="flex-1 h-12 bg-gray-50 border-gray-200 rounded-full px-6 focus-visible:ring-primary focus-visible:border-primary placeholder:text-gray-400"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <Button size="icon" className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-md">
                    <Send size={20} className="ml-1 text-white" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
              <MessageCircle size={64} className="mb-4 text-gray-200" />
              <h2 className="text-2xl font-semibold mb-2 text-gray-600">No chat selected</h2>
              <p>Select a conversation from the left to start messaging</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
