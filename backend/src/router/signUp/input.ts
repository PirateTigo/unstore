import { z } from 'zod'

export const zSignUpTrpcInput = z.object({
  login: z
    .string()
    .min(3)
    .regex(
      /^[a-zA-Z0-9-]$/,
      'Nick may contains only letters, numbers and dashes',
    ),
  password: z.string().min(1),
})
