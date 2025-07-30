'use client';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

export default function SignOutButton() {
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="text-sm text-secondary underline hover:text-secondary/80"
    >
      Sign Out
    </button>
  );
}
