export interface SendMail {
    subject: string;
    body: string;
};

export interface MailAdapters {
    sendEmail: (data: SendMail) => Promise<void>;
};