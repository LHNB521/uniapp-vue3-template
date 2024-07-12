import uni from '@dcloudio/vite-plugin-uni'
import createAutoImport from './auto-import'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'

export default (viteEnv: any, isBuild = false): [] => {
  const vitePlugins: any = []
  vitePlugins.push(
    UniPages({
      exclude: ['**/components/**/**.*'],
      routeBlockLang: 'json5', // 虽然设了默认值，但是vue文件还是要加上 lang="json5", 这样才能很好地格式化
      // homePage 通过 vue 文件的 route-block 的type="home"来设定
      // pages 目录为 src/pages，分包目录不能配置在pages目录下
      // subPackages: ['src/pages-sub'], // 是个数组，可以配置多个，但是不能为pages里面的目录
      dts: 'src/types/uni-pages.d.ts',
    }),
  )
  vitePlugins.push(UniManifest())
  vitePlugins.push(uni())
  vitePlugins.push(createAutoImport())
  return vitePlugins
}
