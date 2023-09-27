import YIcon from "./components/icon";
import YButton from "./components/button";
import YInput from './components/input'
import {
    Edit, Address, Search, Collect, Home, Set

} from "@tooy-ui/components/icon/iconSvg";
import "./theme-chalk/src/index.scss";

// 组件库
const components = [
    YIcon,
    Address,
    Edit,
    Search, Set, Home, Collect, YButton, YInput
];
// 是否已安装标识
const INSTALLED_KEY = Symbol("INSTALLED_KEY");
// 组件库插件
const YElementPlus = {
    install(app: any) {
        // 如果该组件库已经安装过了，则不进行安装
        if (app[INSTALLED_KEY]) return;
        // 将标识值设置为 true，表示已经安装了
        app[INSTALLED_KEY] = true;
        // 循环组件库中的每个组件进行安装
        components.forEach((c) => app.use(c));
    },
};

export {
    YIcon,
    Address,
    Edit,
    Search, Set, Home, Collect, YButton, YInput
};
export default YElementPlus;
