import dotenv from "dotenv";
dotenv.config();

import { mailTrapClient, sender as mailtrapSender } from "./mailtrapConfig.js";
import { BrevoClient } from "./brevoConfig.js";

const isProduction = process.env.NODE_ENV === "production";

// Common interface: returns the right client + sender
export const getEmailClient = () => {
  if (isProduction) {
    return {
      client: BrevoClient,
      sender: {
        email: process.env.BREVO_SENDER_EMAIL,
        name: process.env.BREVO_SENDER_NAME,
      },
    };
  } else {
    return {
      client: mailTrapClient,
      sender: mailtrapSender,
    };
  }
};