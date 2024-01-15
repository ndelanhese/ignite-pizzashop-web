import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string(),
  NEXT_PUBLIC_APP_PORT: z.coerce.number().default(3000),
})

console.log(process.env.NEXT_PUBLIC_APP_URL)

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables!', _env.error.format())

  throw new Error('❌ Invalid environment variables!')
}

export const env = _env.data
