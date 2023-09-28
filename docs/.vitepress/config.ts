export default {

    base: process.env.NODE_ENV === "production" ? "/TooyPlus/" : "/",
    head: [ // 网站图标
        ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://cn.vitejs.dev/viteconf.svg' }]
        // ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
    ],
    appearance: 'dark', // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false

    themeConfig: {

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present The TOOY'
        },


        // 站点标题 (页面左上角标题)
        siteTitle: "TOOY UI", //设置成false后，可用logo代替
        nav: [
            { text: "指南", link: "/guild/installation" },
            { text: "组件", link: "/components/Basic/Button/" },
            {
                text: '链接',
                items: [
                    { text: 'My Github', link: 'https://github.com/Tooy8' },
                    { text: 'My Juejin', link: 'https://juejin.cn/user/2201647377031303' },
                    { text: 'Front-end Notes', link: 'https://www.notion.so/invite/ba949c9223c61e4e40878c20601f5092e5cd4fd1' },
                    {
                        items: [
                            {
                                text: 'vue',
                                link: 'https://cn.vuejs.org/'
                            },
                            {
                                text: 'vitepress',
                                link: 'https://vitepress.dev/'
                            },
                            {
                                text: 'markdown',
                                link: 'https://markdown.com.cn/'
                            }
                        ]
                    }
                ]
            }
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/Tooy8/TooyPlus" }],

        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },

            ],


            // 组件
            "/components/": [
                {
                    text: "Basic 基础组件",
                    collapsed: false,
                    items: [
                        {
                            text: "Button 按钮",
                            link: "/components/Basic/Button/",
                        },
                        {
                            text: "Icon 图标",
                            link: "/components/Basic/Icon/",
                        },

                    ],
                },
                {
                    text: "Form 表单组件",
                    collapsed: false,
                    items: [
                        {
                            text: "Input 输入框",
                            link: "/components/Form/Input/",
                        },
                    ],
                },

            ],


        }



    },







}
