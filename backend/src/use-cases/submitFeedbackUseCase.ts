import { MailAdapters } from "../adapters/mailAdapters";
import { FeedbacksRepository } from "../repositories/FeedbacksRepositories";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
};

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbacksRepository,
    private mailAdapters: MailAdapters
  ) {};

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if(!type){
      throw new Error('Invalid type.');
    };

    if(!comment){
      throw new Error('Invalid comment.');
    };

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid screenshot format.');
    };

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapters.sendEmail({
      subject: "Novo feedback.",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do Feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  };
};