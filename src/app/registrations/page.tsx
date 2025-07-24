// app/registrations/page.tsx


import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import RegistrationsTable from '@/components/RegistrationsTable';

export default async function Registrations() {
	// 1. Protect the page
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/registrations');
	}

	// 2. Directly query the database
	const rawData = await prisma.registration.findMany({
		orderBy: { createdAt: 'desc' },
	});
	const data = rawData.map((reg) => ({
		...reg,
		pointOfContact: reg.pointOfContact ?? undefined,
		address: reg.address ?? undefined,
		socialLinks: reg.socialLinks ?? undefined,
		message: reg.message ?? undefined,
		createdAt:
			reg.createdAt instanceof Date
				? reg.createdAt.toISOString()
				: reg.createdAt,
	}));

	return (
		<div className="p-8">
			
			<div className="my-24 flex flex-col justify-center items-center">
				<h1 className="text-2xl font-bold mb-12 mt-12">Registrations</h1>
				<RegistrationsTable data={data} />
			</div>
		</div>
	);
}
