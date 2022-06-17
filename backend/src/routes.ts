import express from "express";
import NodeMailerMailAdapters from "./adapters/nodemailer/nodeMailerAdapters";
import { PrismaFeedbackRepository } from "./repositories/prisma/prismaFeedbackRepositories";
import { SubmitFeedbackUseCase } from "./use-cases/submitFeedbackUseCase";

export const routes = express.Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const nodeMailerMailAdapters = new NodeMailerMailAdapters();
  const prismaFeedbackRepository = new PrismaFeedbackRepository();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodeMailerMailAdapters
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return response.status(201).send();
});