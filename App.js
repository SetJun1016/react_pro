import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './src/components/LoginScreen';
import MainScreen from './src/components/MainScreen';
import ProductListScreen from './src/components/ProductListScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';

//创建路由词典，即“栈式导航器”
let routes = createStackNavigator({
	main: MainScreen,
	login: LoginScreen,   //排名第一的导航组件就是第一屏内容
	productList: ProductListScreen,
  	productDetail: ProductDetailScreen,
})

//创建根组件，用于盛放其它组件；并注册路由词典
export default createAppContainer(routes)