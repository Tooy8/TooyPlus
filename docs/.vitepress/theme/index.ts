// 使用并扩展默认主题 DefaultTheme
import DefaultTheme from "vitepress/theme";
import './custom.css'

/* development */
import YElementPlus from '../../../packages/dist/tooy-plus'
import '../../../packages/dist/style.css'
export * from '../../../packages/dist/tooy-plus';

/* lab components */
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default {
    ...DefaultTheme,
    enhanceApp: async ({ app, router, siteData }) => {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        app.use(YElementPlus)
        app.use(ElementPlus)
    },
};