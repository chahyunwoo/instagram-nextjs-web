import { getPostsOf, getSavedPostsOf, getLikedPostsOf } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

interface ContextType {
	params: {
		slug: string[];
	};
}

export async function GET(_: NextRequest, context: ContextType) {
	const { slug } = context.params;

	if (!slug || !Array.isArray(slug) || slug.length < 2) {
		return new NextResponse('Bad Request', { status: 400 });
	}

	const [username, query] = slug;

	let request = getPostsOf;

	if (query === 'saved') {
		request = getSavedPostsOf;
	} else if (query === 'liked') {
		request = getLikedPostsOf;
	}

	return request(username).then((data) => NextResponse.json(data));
}
