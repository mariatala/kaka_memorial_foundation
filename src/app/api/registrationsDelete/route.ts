// app/api/registrations/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions }       from '@/lib/auth';
import { prisma }            from '@/lib/prisma';

export async function DELETE(request: Request) {
  // only admins (i.e. any signed-in user in this case) can delete
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await prisma.registration.deleteMany();
  return NextResponse.json({ success: true });
}
