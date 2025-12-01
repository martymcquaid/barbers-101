import { Link } from 'react-router-dom';

type Service = {
  id: string;
  title: string;
  description: string;
  duration?: string;
};

const SERVICES: Service[] = [
  { id: 'haircut', title: 'Haircuts', description: 'Traditional cuts, scissor work, and modern styling.' },
  { id: 'beard', title: 'Beard Services', description: 'Beard trim, shaping, and conditioning.' },
  { id: 'shave', title: 'Shaves', description: 'Straight-razor shaves with hot towel treatment.' },
  { id: 'skin', title: 'Skin Fade', description: 'Clean, precise fade with premium finishes.' },
  { id: 'package', title: 'Grooming Packages', description: 'All-in-one grooming experiences.' },
  { id: 'kids', title: "Kids' Cuts", description: 'Kid-friendly cuts with patience and care.' },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-serif" style={{ color: '#0A2240' }}>Our Services</h1>
      <p className="text-gray-700">From classic cuts to modern fades, we offer a full range of barbering services.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div key={s.id} className="border rounded-lg p-6 shadow-sm bg-white/90">
            <div className="flex items-center h-12 justify-center mb-4">
              <span className="text-3xl">✂️</span>
            </div>
            <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{s.description}</p>
            <Link to={`/services`} className="text-sm font-medium text-slate-800 hover:underline">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
