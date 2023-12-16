// @desk Auth user
// @route POST /api/auth/login
// @access Public

export const authUser = async (req, res) => {
    res.json({ message: 'You are authenticated!' });
}

// GET для получения данных
// POST для записи данных
// PUT для обновления 
// PATH (такой же как и PUT) нужен для более маленьких моментов (одно поле)
// DELETE для удаления