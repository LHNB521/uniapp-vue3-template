import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return defineConfig({
    envDir: './ env',
    plugins: [uni()],
  })
}
