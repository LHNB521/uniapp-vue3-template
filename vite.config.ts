import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return defineConfig({
    envDir: './env',
    plugins: [uni(), UnoCSS()],
  })
}
