import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendEmail: sendEmailSpy }
);

describe("Submit feedback", () => {
  it("should be albe to submit a feedback", async () => {
    await expect(submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "exemplo comment.",
        screenshot: "data:image/png;base64"
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled(); 
  });

  it("should not be able to submit feedback type", async () => {
    await expect(submitFeedbackUseCase.execute({
        type:"",
        comment: "exemplo comment.",
        screenshot: "data:image/png;base64"
    })).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(submitFeedbackUseCase.execute({
        type:"BUG",
        comment: "",
        screenshot: "data:image/png;base64"
    })).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(submitFeedbackUseCase.execute({
        type:"BUG",
        comment: "exemplo comment.",
        screenshot: "test.jpg"
    })).rejects.toThrow();
  });
});