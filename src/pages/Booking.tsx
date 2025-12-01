import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Booking(){
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 bg-white/90 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#0A2240' }}>Book an Appointment</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm mb-1">Date</label>
            <input required type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Time</label>
            <input required type="time" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Service</label>
            <select className="w-full border rounded px-3 py-2" defaultValue="haircut">
              <option value="haircut">Haircut</option>
              <option value="beard">Beard</option>
              <option value="shave">Shave</option>
              <option value="package">Grooming Package</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Barber</label>
            <select className="w-full border rounded px-3 py-2" defaultValue="any">
              <option value="any">Any Barber</option>
              <option value="alex">Alex</option>
              <option value="mike">Mike</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input required type="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="text-right">
            <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">Confirm Booking</button>
          </div>
        </form>
      ) : (
        <div className="p-4 bg-green-100 text-green-800 rounded">Booking request received. We’ll confirm your slot shortly.</div>
      )}
      <div className="mt-4"><Link to="/" className="text-sm text-slate-700 hover:underline">Back to Home</Link></div>
    </div>
  );
}
