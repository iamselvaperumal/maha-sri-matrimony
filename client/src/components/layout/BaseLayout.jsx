import Footer from './Footer';
import Navbar from './Navbar';

export default function BaseLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans overflow-x-hidden pt-20">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
