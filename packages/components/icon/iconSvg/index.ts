import { withInstall } from '@tooy-ui/utils'
import EditIcon from './Edit/Edit.vue'
import AddressIcon from './Address/Address.vue'
import HomeIcon from "./Home/Home.vue";
import SetIcon from "./Set/Set.vue";
import SearchIcon from "./Search/Search.vue";
import CollectIcon from "./Collect/Collect.vue";

// 通过 withInstall 方法给 Icon 添加了一个 install 方法
const Edit = withInstall(EditIcon)
const Address = withInstall(AddressIcon)
const Home = withInstall(HomeIcon)
const Set = withInstall(SetIcon)
const Search = withInstall(SearchIcon)
const Collect = withInstall(CollectIcon)




export {
    Edit, Address, Search, Home, Set, Collect
}

