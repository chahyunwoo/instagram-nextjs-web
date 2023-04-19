import { UserType } from '@/model/user';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: UserType;
	}
}
