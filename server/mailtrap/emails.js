import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrapConfig.js";
import dotenv from "dotenv";

dotenv.config();

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully!", response);
  } catch (error) {
    console.log(`Error sending verification ${error}`);
    throw new Error(`Error Sending Verification Email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: process.env.MAILTRAP_WELCOME_TEMPLATE_UUID, // Mailtrap template ID
      template_variables: {
        company_info_name: "Authentication Company",
        name: name,
      },
    });
    console.log("Welcome Email Sent Successfully!", response);
  } catch (error) {
    console.error("Error Sending Welcome Email!", error);
    throw new Error(`Error Sending Welcome Email: ${error}`);
  }
};
