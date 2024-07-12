export default (UNI_PLATFORM: string) => {
  // h5环境增加 BUILD_TIME 和 BUILD_BRANCH
  return (
    UNI_PLATFORM === 'h5' && {
      name: 'html-transform',
      transformIndexHtml(html: any) {
        return html.replace('%BUILD_TIME%', dayjs().format('YYYY-MM-DD HH:mm:ss'))
      }
    }
  )
}
