import crypto from 'crypto'
import { loadTRPC } from '../../lib/trpc'
import { zSignUpTrpcInput } from './input'

export const signUpTrpcRoute = async () => {
  const trpc = await loadTRPC()

  return trpc.procedure
    .input(zSignUpTrpcInput)
    .mutation(async ({ ctx, input }) => {
      const exUser = await ctx.prisma.user.findUnique({
        where: {
          nick: input.login,
        },
      })

      if (exUser) {
        throw new Error('User with this login already exists')
      }

      await ctx.prisma.user.create({
        data: {
          nick: input.login,
          password: crypto
            .createHash('sha256')
            .update(input.password)
            .digest('hex'),
        },
      })

      return true
    })
}
