// app/registrations/page.tsx
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import RegistrationsList from '@/app/registrations/RegistrationList';

// Define the Registration type if not imported from elsewhere
type Registration = {
	id: string;
	type: 'volunteer' | 'partner';
	name: string;
	email: string;
	formType: string;
	phone: string;
	address?: string;
	message?: string;
	createdAt: string;
};

export default async function RegistrationsPage() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/registrations');
	}

	// Fetch registrations from the database
	const raw = await prisma.registration.findMany();

	const data: Registration[] = raw.map((r) => ({
		id: String(r.id),
		type: r.formType as 'volunteer' | 'partner',
		name: r.name,
		email: r.email ?? '', // Ensure email is always a string
		formType: r.formType,
		phone: r.phone,
		pointOfContact: r.pointOfContact ?? undefined,
		address: r.address ?? undefined,
		socialLinks: r.socialLinks ?? undefined,
		message: r.message ?? undefined,
		createdAt:
			r.createdAt instanceof Date ? r.createdAt.toISOString() : r.createdAt,
	}));

	return (
		<main>
			<RegistrationsList initialData={data} />;
		</main>
	);
}
