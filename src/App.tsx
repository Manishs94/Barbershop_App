import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-black text-white fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="text-2xl font-bold">DREAMTEAM CUTZ</Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/services" className="hover:text-gray-300">Services</Link>
                <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
                <Link to="/booking" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="hover:text-gray-300">Home</Link>
                  <Link to="/services" className="hover:text-gray-300">Services</Link>
                  <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
                  <Link to="/booking" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 text-center">
                    Book Now
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">DREAMTEAM CUTZ</h3>
                <p className="text-gray-400">Premium grooming experience for the modern gentleman.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Hours</h4>
                <div className="space-y-2">
                  <p>Monday - Friday: 9AM - 8PM</p>
                  <p>Saturday: 9AM - 6PM</p>
                  <p>Sunday: 10AM - 4PM</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone size={16} />
                    (555) 123-4567
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} />
                    info@dreamteamcutz.com
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} />
                    123 Barber Street, NY 10001
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>&copy; 2024 DREAMTEAM CUTZ. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&q=80&w=2000')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">DREAMTEAM CUTZ</h1>
            <p className="text-xl md:text-2xl mb-8">WHERE STYLE MEETS PRECISION</p>
            <Link 
              to="/booking"
              className="bg-white text-black px-8 py-4 rounded text-lg font-semibold hover:bg-gray-200 inline-block"
            >
              Book Your Visit
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800" 
                alt="Barber Shop Interior"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Premium Grooming Experience</h2>
              <p className="text-gray-600 mb-6">
                At DREAMTEAM CUTZ, we believe that every haircut should be an experience. 
                Our skilled barbers combine traditional techniques with modern styles to 
                give you the perfect cut every time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  <span>Expert Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  <span>Prime Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  <span>Easy Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  <span>Online Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Cut",
                price: "$35",
                image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=500",
                description: "Traditional haircut with modern styling"
              },
              {
                name: "Beard Grooming",
                price: "$25",
                image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=500",
                description: "Professional beard trimming and shaping"
              },
              {
                name: "Hot Towel Shave",
                price: "$40",
                image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&q=80&w=500",
                description: "Luxurious straight razor shave experience"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold">{service.price}</span>
                    <Link 
                      to="/booking"
                      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Follow Us on Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1599351431005-c3486c6f8d12?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=500"
            ].map((image, index) => (
              <div key={index} className="relative group">
                <img 
                  src={image}
                  alt="Instagram Post"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;