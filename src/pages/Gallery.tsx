import { Link } from 'react-router-dom';

export default function Gallery(){
  const pics = Array.from({length:6});
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-3xl font-serif" style={{ color: '#0A2240' }}>Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pics.map((_,i)=> (
          <div key={i} className="bg-black/70 rounded-lg overflow-hidden aspect-w-1 aspect-h-1 flex items-center justify-center">
            <span className="text-white/70">Photo {i+1}</span>
          </div>
        ))}
      </div>
      <Link to="/booking" className="inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded">Book Now</Link>
    </div>
  );
}
