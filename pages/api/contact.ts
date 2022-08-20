import process from 'node:process';
import {NextApiRequest, NextApiResponse} from 'next';
import z from 'zod';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? 'NoAPIKey');
const contactRequestSchema = z.object({
	firstName: z.string().max(32),
	lastName: z.string().max(32),
	email: z.string().email(),
	message: z.string().max(16_384),
});

type ContactRequest = z.infer<typeof contactRequestSchema>;

export default async function handler(request: NextApiRequest, result: NextApiResponse) {
	return; // TODO: Get this later
	if (request.method !== 'POST') {
		return result.status(405);
	}

	const requestData = contactRequestSchema.safeParse(request.body);
	if (!requestData.success) {
		result.status(400).json(requestData.error.issues);
		return;
	}

	const contact = requestData.data;

	const message = {
		to: contact.email, // Change to your recipient
		from: 'kyle@depace.dev', // Change to your verified sender
		subject: 'Contact Form',
		text: `${contact.firstName} has sent a message: ${contact.message}`,
	};

	await sgMail
		.send(message)
		.then(() => {
			console.log('Email sent');
		})
		.catch(error => {
			console.error(error);
		});

	result.status(200).json({name: requestData.data.firstName});
}
