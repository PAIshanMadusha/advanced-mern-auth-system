import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { getEmailClient } from "./emailProvider.js";

//Send Verification Email
export const sendVerificationEmail = async (email, verificationToken) => {
  const { client, sender } = getEmailClient();
  const recipient = [{ email }];

  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    });

    console.log("Verification Email sent successfully!", response);
  } catch (error) {
    console.log(`Error sending verification email: ${error}`);
    throw new Error(`Error Sending Verification Email: ${error}`);
  }
};

//Send Welcome Email
export const sendWelcomeEmail = async (email, name) => {
  const { client, sender } = getEmailClient();
  const recipient = [{ email }];

  try {
    const htmlContent = WELCOME_EMAIL_TEMPLATE.replace("{name}", name);

    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Welcome to Authentication App!",
      html: htmlContent,
    });

    console.log("Welcome Email Sent Successfully!", response);
  } catch (error) {
    console.error("Error Sending Welcome Email!", error);
    throw new Error(`Error Sending Welcome Email: ${error}`);
  }
};

//Send Password Reset Email
export const sendPasswordResetEmail = async (email, resetUrl) => {
  const { client, sender } = getEmailClient();
  const recipient = [{ email }];

  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
    });

    console.log("Password Reset Email Sent Successfully!", response);
  } catch (error) {
    console.log("Error sending password reset email: ", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

//Send Reset Success Email
export const sendResetSuccessEmail = async (email) => {
  const { client, sender } = getEmailClient();
  const recipient = [{ email }];

  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Completed!",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password Reset Success Email Sent Successfully!", response);
  } catch (error) {
    console.log("Error sending password reset success email", error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
