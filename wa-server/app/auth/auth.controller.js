import { prisma } from "../prisma.js";

// @desk Auth user
// @route POST /api/auth/login
// @access Public

export const authUser = async (req, res) => {

    const user = await prisma.user.findMany()
    res.json({ user });
}

// GET для получения данных
// POST для записи данных
// PUT для обновления 
// PATH (такой же как и PUT) нужен для более маленьких моментов (одно поле)
// DELETE для удаления