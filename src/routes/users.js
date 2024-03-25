import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  response.json({
    text1: "Primeiro teste 1",
    text2: "Segundo teste 2",
    text3: "Terceiro teste 3",
    text4: "Quarto teste 4",
  });
});

export default router;
