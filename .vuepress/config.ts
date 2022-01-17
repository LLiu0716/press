import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  base: '/press/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  alias: {
    '@': path.resolve(__dirname, './')
  },
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  // locales: {
  //   '/': {
  //     lang: 'en-US'
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN'
  //   }
  // },
  themeConfig: {
    logo: './favicon.svg',
    // 在sidebar配置侧导航栏
    sidebar: [
      { text: '主页', link: '/home' },
      { text: 'web', link: '/guides', children: [] }
    ],
    navbar: [
      {
        text: '主页',
        link: '/home'
      },
      { text: 'web', link: '/guides' }
    ],
    // locales: {
    //   '/': {
    //     selectLanguageName: 'English'
    //   },
    //   '/zh/': {
    //     selectLanguageName: '简体中文'
    //   }
    // },
    lastUpdatedText: '最近更新时间',
    backToHome: '返回首页',
    notFound: ['页面丢失'],
    lastUpdated: true
  },
  debug: true,
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhanceFiles.ts'),
  clientAppSetupFiles: path.resolve(__dirname, './clientAppSetup.ts'),
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: './favicon.svg'
      }
    ]
  ],
  host: '0.0.0.0',
  port: 8080,
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ],
    [
      '@vuepress/plugin-search',
      {
        // 排除首页
        isSearchable: (page) => page.path !== '/'
      }
    ]
  ]
})
