import { prisma } from "../prisma.js";
import { faker } from '@faker-js/faker';
import { hash, verify } from 'argon2';
import asyncHandler from "express-async-handler";
import { generateToken } from "./generate-token.js";
import { UserFields } from "../utils/user.utils.js";

// @desk Auth user
// @route POST /api/auth/login
// @access Public

export const authUser = asyncHandler(async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    const isValidPassword = await verify(user.password, password);

    if (user && isValidPassword) {
        const token = generateToken(user.id);
        res.json({ user, token });
    } else {
        res.status(401);
        throw new Error('Email and password are not correct');
    }

    res.json({ user });
});

// @desk Register user
// @route POST /api/auth/Register
// @access Public

export const registerUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const isHaveUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (isHaveUser) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await prisma.user.create({
        data: {
            email, 
            password: await hash(password), 
            name: faker.name.fullName()
        },
        select: UserFields
    });

    const token = generateToken(user.id);

    res.json({ user, token });
})

// GET для получения данных
// POST для записи данных
// PUT для обновления 
// PATH (такой же как и PUT) нужен для более маленьких моментов (одно поле)
// DELETE для удаления