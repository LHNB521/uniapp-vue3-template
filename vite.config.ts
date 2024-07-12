import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'

import createPlugins from './vites'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  const { UNI_PLATFORM } = process.env

  return {
    envDir: './env',
    plugins: createPlugins(env, command === 'build'),
  }
})
