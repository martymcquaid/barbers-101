import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <section className="bg-white/90 rounded-lg p-6 shadow-md md:p-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-2xl font-semibold" style={{ color: '#8B1E23' }}>Est. 1989</span>
          <span className="text-sm" style={{ color: '#555' }}>Heritage Barber Co.</span>
        </div>
        <h2 className="text-3xl font-serif" style={{ color: '#0A2240' }}>
          Tradition, Craftsmanship, Community
        </h2>
        <p className="mt-2 text-gray-700">
          Our barbershop blends classic, old-world charm with modern grooming excellence. Every cut, shave, and beard trim is a craft honed by years of experience.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white/90 rounded-lg p-6 shadow-sm">
            <div className="h-28 bg-gradient-to-br from-slate-200 to-slate-100 rounded mb-4 flex items-center justify-center">
              <span className="text-sm text-slate-500">Barber Profile {i + 1}</span>
            </div>
            <h3 className="font-semibold" style={{ color: '#1A1A1A' }}>Barber {String.fromCharCode(65 + i)}</h3>
            <p className="text-sm text-gray-600">Detail about {String.fromCharCode(65 + i)} with passion for traditional techniques and modern style.</p>
          </div>
        ))}
      </section>

      <section className="border-t pt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">Crafting sharp looks since 1989. We’re proud to serve our community with care.</p>
        <Link to="/booking" className="inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded">Book Now</Link>
      </section>
    </div>
  );
}
