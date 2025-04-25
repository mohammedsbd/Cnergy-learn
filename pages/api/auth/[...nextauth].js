import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});


// NextAuth.js setup for GitHub OAuth authentication

// This config sets up GitHub as the authentication provider for the Next.js app
// We added the necessary environment variables for the GitHub OAuth keys and the NextAuth secret.
// Users can now sign in using their GitHub accounts and access authentication details in the app.
// The session information is managed with NextAuth's useSession hook for easy access control and user management.
