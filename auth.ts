import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter both email and password');
        }

        try {
          const response = await fetch(
            'http://localhost:8080/api/v1/auth/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const data = await response.json();
          console.log(data);

          // Check if the response indicates an error
          if (!response.ok) {
            // Use the error message from the API if available
            throw new Error(data.message || 'Invalid credentials');
          }

          // Validate that we received the expected user data
          if (!data || !data.id) {
            throw new Error('Invalid response from server');
          }

          return {
            id: '1',
            email: data.email,
            user: 'user',
          };
        } catch (error: any) {
          // Log the error for debugging (remove in production)
          console.error('Auth error:', error);
          throw new Error(error.message || 'Authentication failed');
        }
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return true;
    },
    jwt: async ({ token }) => {
      return token;
    },
    session: async ({ session }) => {
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
});
