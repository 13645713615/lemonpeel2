/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-04 17:38:24
 * @LastEditTime: 2023-03-03 21:01:20
 */
import { defineConfig } from 'vitepress';
import { applyPlugins } from '@ruabick/md-demo-plugins';
import { genTemp } from '@ruabick/vite-plugin-gen-temp';
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc';
import { getRouterConfig } from './sidebar.js';
import { resolve } from 'path';

export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  base: process.env.NODE_ENV === 'production' ? '/lemonpeel2' : '/',
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     title: 'Lemonpeel',
  //     description: '快速搭建网站的工具和组件',
  //   },
  //   '/en/': {
  //     lang: 'en-US',
  //     title: 'Lemonpeel',
  //     description: 'Tools and components for quickly building websites',
  //   },
  // },
  title:'Lemonpeel',
  description: '快速搭建网站的工具和组件',
  themeConfig: {
    // logo: '/logo.svg',
    // localeLinks: {
    //   text: '',
    //   items: [
    //     { text: '简体中文', link: '/' },
    //     { text: 'English', link: '/en/' },
    //   ],
    // },
    footer: {
      copyright: ' MIT Licensed | Copyright © 2019-present Evan You',
    },
    nav: [
      { text: 'hooks', link: '/guide/' },
      // { text: 'components', link: '/components/' },
      // {
      //   text: '相关链接',
      //   items: [
      //     {
      //       text: '论坛',
      //       link: 'https://github.com/vuejs/pinia/discussions',
      //     },
      //     {
      //       text: '聊天室',
      //       link: 'https://chat.vuejs.org',
      //     },
      //     {
      //       text: 'Twitter',
      //       link: 'https://twitter.com/posva',
      //     },
      //     {
      //       text: '更新日志',
      //       link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',
      //     },
      //   ],
      // },
    ],
    sidebar: {
      '/en/': getRouterConfig("/en/"),
      '/': getRouterConfig("/"),
    },
    algolia: {
      appId: "",
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/13645713615/lemonpeel2/tree/main/packages/hooks' },
    ],
  },
  vue: {},
  vite: {
    plugins: [genTemp(), genApiDoc()],
    resolve: {
      alias: {
        '@lemonpeel2/hooks': resolve('./lib/hooks.js'),
      },
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  buildEnd() {
    process.exit(0);
  },
});
