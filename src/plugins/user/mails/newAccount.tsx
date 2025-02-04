// WelcomeEmailTemplate.tsx

export interface NewAccountProps {
  username: string;
  surname: string;
  verifyToken: string;
}

export const NewAccountMail = ({
  username,
  surname,
  verifyToken,
}: NewAccountProps): string => {
  return `
        <html>
          <head>
            <style>
              /* Add your custom styles here */
            </style>
          </head>
          <body>
            <h1>Welcome, ${username} ${surname}!</h1>
            <p>Thank you for creating an account with us.</p>
            <p>Please click the link below to verify your email address:</p>
            <a href="${Bun.env.BE_URL}/user/verify-email?verifyToken=${verifyToken}">Verify Email</a>
          </body>
        </html>
      `;
};
