export default {
  providers: [
    {
      domain: process.env.CLERK_ISSUER_URL || 'https://notable-griffon-77.clerk.accounts.dev/.well-known/jwks.json',
      applicationID: 'convex',
    },
  ],
};
