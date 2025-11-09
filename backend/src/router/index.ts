import { loadTRPC } from '../lib/trpc'
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { signUpTrpcRoute } from './signUp'
// @endindex

export const loadTrpcRouter = async () => {
  const trpc = await loadTRPC();

  return trpc.router({
    // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: await ${f.path.split('/').slice(0, -1).pop()}TrpcRoute(),`)
    signUp: await signUpTrpcRoute(),
    // @endindex
  })
}

export type TrpcRouter = Awaited<ReturnType<typeof loadTrpcRouter>>
