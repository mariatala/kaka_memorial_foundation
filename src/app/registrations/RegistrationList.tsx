// app/registrations/RegistrationsList.tsx
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import RegistrationsTable from '@/app/registrations/RegistrationsTable';

export type Registration = {
  id: string;
  type: 'volunteer' | 'partner';
  name: string;
  email: string;
  formType: string;
  phone: string;
  pointOfContact?: string
  address?: string
  socialLinks?: string
  message?: string
  createdAt: string;
};


export default function RegistrationsList({ initialData }: {
  initialData: Registration[];
}) {

  const { data: session } = useSession();
  const [filter, setFilter] = useState<'all'|'volunteer'|'partner'>('all');
  const [data, setData]     = useState(initialData);

  // Compute filtered rows
  const filtered = filter === 'all'
    ? data
    : data.filter(r => r.formType === filter);
    

  // Delete-all handler
  const handleDeleteAll = async () => {
    if (!confirm('Really delete ALL registrations?')) return;
    const res = await fetch('/api/registrationsDelete', { method: 'DELETE' });
    if (res.ok) {
      setData([]);
    } else {
      alert('Failed to delete.');
    }
  };

  return (
    <div className=" flex flex-col mt-40 p-8 space-y-6 min-h-screen">
      {/* Filter buttons */}
      <div className="flex gap-2">
        {(['all','volunteer','partner'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded ${
              filter === f ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {f === 'all' ? 'All' : f[0].toUpperCase()+f.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      <RegistrationsTable data={filtered} />

      {/* Delete All (only if signed in) */}
      {session && (
        <button
          onClick={handleDeleteAll}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Delete All
        </button>
      )}
    </div>
  );
}
