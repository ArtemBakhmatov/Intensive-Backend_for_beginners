import jwt from 'jsonwebtoken'

export const generateToken = userId =>
	jwt.sign( // sign() -> подпись
		{
			userId // тело, что мы хотим опрокинуть
		},
		process.env.JWT_SECRET, // ключ шифрования
		{ 
			expiresIn: '10d'    // сколько будет действовать ключ (10 дней)
		} 
	)
