import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { addComent } from '@/service/posts';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const session = await getServerSession(authOptions);
	const user = session?.user;

	if (!user) {
		return new Response('Unauthorized', { status: 401 });
	}

	const { id, comment } = await req.json();

	if (!id || comment === undefined) {
		return new Response('Bad Request', { status: 400 });
	}

	return addComent(id, user.id, comment)
		.then((res) => NextResponse.json(res))
		.catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
