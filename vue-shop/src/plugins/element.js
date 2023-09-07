import Vue from 'vue'
import { Button } from 'element-ui'
import { Form } from 'element-ui'
import { FormItem } from 'element-ui'
import { Input } from 'element-ui'
import { Container } from 'element-ui'
import { Header } from 'element-ui'
import { Aside } from 'element-ui'
import { Main } from 'element-ui'
import { Submenu } from 'element-ui'
import { Menu } from 'element-ui'
import { MenuItem } from 'element-ui'
import { MenuItemGroup } from 'element-ui'
import { Message } from 'element-ui'
import { Icon } from 'element-ui'
import{Breadcrumb} from'element-ui'
import{BreadcrumbItem} from'element-ui'
import{Card} from'element-ui'
import{Row,Col} from'element-ui'
import{Table,TableColumn,Switch,Tooltip,Pagination} from'element-ui'

Vue.use(BreadcrumbItem)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Col)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Icon)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.prototype.$message = Message
