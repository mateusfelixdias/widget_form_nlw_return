import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../FeedbacksRepositories";

export class PrismaFeedbackRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData){
        await prisma.feedback.create({
            data: {
              type,
              comment,
              screenshot,
            },
          });
    };
};