import { Link } from 'react-router-dom';

export default function BarberProfiles(){
  const barbers = [
    {name:'Alex', specialty:'Fades & Traditional Cuts', years:12},
    {name:'Mia', specialty:'Beard Shaping', years:9},
    {name:'Jon', specialty:'Shaves & Classic Styles', years:15},
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-3xl font-serif" style={{ color: '#0A2240' }}>Meet Our Barbers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {barbers.map((b)=> (
          <div key={b.name} className="bg-white/90 rounded-lg p-6 shadow-sm">
            <div className="h-28 bg-gradient-to-br from-slate-200 to-slate-100 rounded mb-4 flex items-center justify-center">{b.name.charAt(0)}</div>
            <h3 className="font-semibold">{b.name}</h3>
            <p className="text-sm text-gray-600">{b.specialty}</p>
            <p className="text-xs text-gray-500">{b.years} years experience</p>
          </div>
        ))}
      </div>
      <Link to="/booking" className="inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded">Book with a barber</Link>
    </div>
  );
}
