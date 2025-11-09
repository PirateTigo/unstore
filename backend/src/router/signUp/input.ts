import { z } from 'zod'

export const zSignUpTrpcInput = z.object({
  login: z
    .string()
    .min(3)
    .regex(
      /^[A-Za-z0-9-]+$/,
      'Login may contains only letters, numbers and dashes',
    ),
  password: z.string().min(1),
})
