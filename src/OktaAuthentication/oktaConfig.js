// src/oktaConfig.js
export default {
  issuer: "https://dev-88895689.okta.com/oauth2/default",
  clientId: "0oajxxgb8elfrRW4G5d7",
  redirectUri: `${window.location.origin}/callback`,
  onAuthRequired: true,
  scopes: ["openid", "profile", "email", "groups"],
  pkce: true,
  tokenManager: {
    storage: "cookie", // Store session tokens in cookies
    secure: true, // Ensures the cookie is only transmitted over HTTPS
    sameSite: "Strict", // Prevents sending the cookie with cross-site requests
    cookieOptions: {
      path: "/", // Path where cookie is accessible
      httpOnly: true, // HTTP-only cookie, inaccessible via JavaScript
      secure: true, // Ensures the cookie is sent only over HTTPS
      sameSite: "Strict", // Prevents CSRF attacks
    },
  },
};
