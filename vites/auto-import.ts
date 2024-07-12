import AutoImport from 'unplugin-auto-import/vite'

export default () => {
  return AutoImport({
    imports: ['vue', 'uni-app'],
    dts: 'src/types/auto-import.d.ts',
    dirs: ['src/hooks'], // 自动导入 hooks
    eslintrc: { enabled: true },
    vueTemplate: true // default false
  })
}
