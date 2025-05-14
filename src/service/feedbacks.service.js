import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllFeedbacksService = () => {
  return prisma.feedback.findMany({
    include: {
      usuario: true,
      doacao: true,
      campanha: true,
    },
  });
};

export const createFeedbackService = (data) => {
  return prisma.feedback.create({ data });
};

export const getFeedbackByIdService = (id) => {
  return prisma.feedback.findUnique({ where: { id } });
};

export const updateFeedbackService = (id, data) => {
  return prisma.feedback.update({ where: { id }, data });
};

export const deleteFeedbackService = (id) => {
  return prisma.feedback.delete({ where: { id } });
};
