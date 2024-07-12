import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'unibest',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#018d71',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    list: [
      {
        // iconPath: 'static/tabbar/xem.png',
        // selectedIconPath: 'static/tabbar/xxxem.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        // iconPath: 'static/tabbar/xem.png',
        // selectedIconPath: 'static/tabbar/xxxem.png',
        pagePath: 'pages/about/index',
        text: '关于',
      },
    ],
  },
})
