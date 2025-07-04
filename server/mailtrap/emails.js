import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken)=>{
    const recipient = [{email}]

    try{
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        });

        console.log("Email sent successfully!", response);
    }catch(error){
        console.log(`Error sending verification ${error}`);
        throw new Error(`Error Sending Verification Email: ${error}`);
    }
}