import SignIn from '@/components/SignIn';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'SignIn',
	description: 'Sign in to your account',
};
interface IProps {
	searchParams: {
		callbackUrl?: string;
	};
}

export default async function SignInPage({
	searchParams: { callbackUrl },
}: IProps) {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect('/');
	}

	const providers = (await getProviders()) ?? {};

	return (
		<section className='flex justify-center mt-24'>
			<SignIn providers={providers} callbackUrl={callbackUrl ?? '/'}></SignIn>
		</section>
	);
}
