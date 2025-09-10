import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "软聚企业信息化平台",
    description: "elm",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: 'https://www.bgwa.cn' },
            { text: 'git仓库', link: 'https://github.com/starrystar-tech' },
            { text: '前端', link: '/frontend' },
            { text: '后端', link: '/backend' }
        ],

        sidebar: [
            {
                text: '新手必读',
                items: [
                    { text: '交流群', link: '/chatgroup' },
                    { text: '快速启动(前端项目)', link: '/frontend' },
                    { text: '快速启动(后端项目)', link: '/backend' }
                ]
            },
            {
                text: 'CRM',
            },
            {
                text: 'ERP',
            },
            {
                text: '商城',
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/starrystar-tech/elm-docs' }
        ]
    }
})
