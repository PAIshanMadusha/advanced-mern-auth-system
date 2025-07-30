import dotenv from "dotenv";
dotenv.config();

import Brevo from "@getbrevo/brevo";

const client = new Brevo.TransactionalEmailsApi();

// Configure Brevo API key
client.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

export const BrevoClient = {
  send: async ({ from, to, subject, html }) => {
    const sendSmtpEmail = {
      sender: from,
      to,            
      subject,
      htmlContent: html,
    };

    return await client.sendTransacEmail(sendSmtpEmail);
  },
};