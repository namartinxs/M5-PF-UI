// src/swaggerConfig.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Doações",
    version: "1.0.0",
    description: "Documentação da API para o projeto de doações com campanhas, usuários e feedbacks.",
  },

  servers: [
    {
      url: "http://localhost:8800",
      description: "Servidor local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"], // Caminho dos arquivos que contêm as rotas documentadas
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };