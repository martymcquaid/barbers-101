import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <section className="lg:py-20 py-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between md:gap-8">
          <div className="md:w-1/2 w-full">
            <h1 className="font-serif text-4xl md:text-6xl mb-4" style={{ color: '#F3EDE2' }}>
              Traditional Barbering. Modern Style.
            </h1>
            <p className="text-lg" style={{ color: '#F3EDE2' }}>
              Classic cuts, sharp shaves, and authentic craftsmanship.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/booking" className="px-4 py-2 bg-amber-700 rounded shadow">Book Appointment</Link>
              <Link to="/services" className="px-4 py-2 border border-amber-700 rounded text-amber-200">View Services</Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center">
            <svg viewBox="0 0 400 320" width="100%" height="auto" aria-label="Barber chair illustration">
              <defs>
                <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                  <stop stopColor="#8B1E23" offset="0"/>
                  <stop stopColor="#0A2240" offset="1"/>
                </linearGradient>
              </defs>
              <rect x="40" y="40" width="320" height="220" rx="20" fill="url(#grad)" opacity="0.85" />
              <rect x="90" y="80" width="220" height="60" rx="10" fill="white" opacity="0.3" />
              <rect x="160" y="200" width="80" height="60" rx="8" fill="white" opacity="0.5" />
              <circle cx="70" cy="60" r="28" fill="#fff" opacity="0.8" />
              <rect x="110" y="170" width="180" height="8" rx="4" fill="#fff" />
            </svg>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-white/90 text-slate-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-serif">About Our Craft</h3>
            <p className="mt-2 text-sm">A short story about our shop’s history, craftsmanship, and community. We honor tradition while embracing modern styling.</p>
            <Link to="/about" className="inline-block mt-3 text-sm font-medium text-slate-800">Read More</Link>
          </div>
          <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-100 rounded-lg shadow-sm" aria-label="Vintage photo placeholder"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-2xl font-serif" style={{ color: '#0A2240' }}>Featured Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {t:'Haircuts', d:'Traditional cuts with modern styling.'},
            {t:'Beard Trims', d:'Precise shaping and conditioning.'},
            {t:'Hot Towel Shave', d:'Classic straight-razor shave with hot towel.'},
          ].map((s,i)=> (
            <div key={i} className="bg-white/90 rounded-lg p-6 shadow-sm">
              <div className="h-12 flex items-center justify-center mb-3">✂️</div>
              <h3 className="font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-gray-600">{s.d}</p>
              <Link to="/services" className="text-sm font-medium text-slate-800">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/60 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span>Walk-ins Welcome • Bookings Recommended</span>
          <Link to="/booking" className="px-4 py-2 border border-white rounded">Book Now</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-2xl font-serif" style={{ color: '#0A2240' }}>What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Real barbers. Real skill.", "Crafting sharp looks since 1998."]
            .map((q, idx)=> (
              <div key={idx} className="bg-white/90 rounded-lg p-6 shadow-sm border-l-4 border-amber-600">
                <p className="text-sm text-slate-800">“{q}”</p>
              </div>
            ))}
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl">Barber Heritage</span>
          </div>
          <div className="text-sm">© 2025 Barber Heritage. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
