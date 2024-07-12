import uni from '@dcloudio/vite-plugin-uni'
import createAutoImport from './auto-import'

export default (viteEnv: any, isBuild = false): [] => {
  const vitePlugins: any = []
  vitePlugins.push(uni())
  vitePlugins.push(createAutoImport())
  return vitePlugins
}
