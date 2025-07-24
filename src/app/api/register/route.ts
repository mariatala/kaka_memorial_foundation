import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendNotificationEmail } from '@/lib/mail';

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		const { formType, name, phone } = data;

		// Validate formType
		if (!formType || !name || !phone) {
			return NextResponse.json(
				{ error: 'formType, name and phone are required' },
				{ status: 400 }
			);
		}
		//Persist to the database
		const record = await prisma.registration.create({
			data: {
				formType,
				name,
				phone,
				pointOfContact: data.pointOfContact || '',
				address: data.adddress || '',
				socialLinks: data.socialLinks || '',
				message: data.message || '',
			},
		});
		// 3. (Optional) Send notification email
		await sendNotificationEmail(record);

		return NextResponse.json({ success: true, id: record.id });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
