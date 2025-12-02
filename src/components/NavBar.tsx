import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-semibold text-red-700">Barber Heritage</span>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-sm font-medium text-red-700 hover:text-red-900">Home</Link>
              <Link to="/about" className="text-sm font-medium text-red-700 hover:text-red-900">About</Link>
              <Link to="/services" className="text-sm font-medium text-red-700 hover:text-red-900">Services</Link>
              <Link to="/gallery" className="text-sm font-medium text-red-700 hover:text-red-900">Gallery</Link>
              <Link to="/booking" className="text-sm font-medium text-red-700 hover:text-red-900">Booking</Link>
              <Link to="/barbers" className="text-sm font-medium text-red-700 hover:text-red-900">Barbers</Link>
              <Link to="/contact" className="text-sm font-medium text-red-700 hover:text-red-900">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Link to="/booking" className="hidden md:inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded shadow hover:bg-amber-600" aria-label="Book Now">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
