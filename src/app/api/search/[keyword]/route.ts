import { searchUsers } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

interface ContextType {
	params: { keyword: string };
}

export async function GET(_: NextRequest, context: ContextType) {
	return searchUsers(context.params.keyword).then((data) =>
		NextResponse.json(data)
	);
}
