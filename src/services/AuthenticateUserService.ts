import { getRepository } from 'typeorm'
import User from '../models/User'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'

interface Request {
    email: string
    password: string
}

interface Response {
    user: User;
    token: string
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({
            where: { email }
        })
        if (!user) {
            throw new Error('Incorrect email/password combination')
        }

        const passwordMatched = await compare(password, user.password)
        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination')
        }

        const { apiSecretKey, expiresIn } = authConfig.jwt
        const token = sign({}, apiSecretKey, {
            subject: user.id,
            expiresIn: expiresIn
        })

        return {
            user,
            token
        }
    }
}

export default AuthenticateUserService
