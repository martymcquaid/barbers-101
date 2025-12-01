export default function Contact(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-3xl font-serif" style={{ color: '#0A2240' }}>Contact</h2>
      <div className="bg-white/90 rounded-lg p-6 shadow-sm">
        <div className="mb-3">123 Heritage Lane, Old Town</div>
        <div>Phone: (555) 012-3456</div>
        <div>Email: hello@barberheritage.co</div>
        <div className="mt-2">Opening Hours: Mon-Sat 9:00-18:00</div>
      </div>
      <div className="bg-white/90 rounded-lg p-6 shadow-sm h-48 flex items-center justify-center text-sm text-gray-600">Map placeholder</div>
    </div>
  );
}
