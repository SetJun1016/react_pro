import React from 'react'
import {View, Text, Image, Button, FlatList, 
	StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native'

export default class ProductListScreen extends React.Component{
    static navigationOptions = {
        title : '商品列表',
	}
	pno = 0 
    constructor(){
        super()
        this.state = {
			productList: [ ],     //商品列表
      		hasMore: true, 
        }
	}
	componentDidMount(){
		//组件挂载完成，加载一次数据
		this.loadMore()  
	}
	loadMore =()=>{   //加载更多的商品 
		//如果没有更多数据可加载了，就直接退出    
		if(!this.state.hasMore){
		  return
		}
		this.pno++
		let url = 'http://www.codeboy.com/data/product/list.php?pno='+this.pno
		//发起异步请求，获取数据服务器上的商品列表
		fetch(url).then((res)=>{
		  return res.json()
		}).then((body)=>{
		  let productList = this.state.productList //获取已有商品
		  productList = productList.concat(body.data) //拼接新商品
		  this.setState({productList}) //将新数组保存回状态
		  //console.log(productList)
		  //判断还有更多数据吗？
		  if(this.pno>=body.pageCount){ //目前加载的页号以及要超过总页数
			this.setState({hasMore:false})
		  }
		}).catch((err)=>{
		  console.log(err)
		})
	}
	_renderItem = (data)=>{
		//data形如：{item: 商品, index: 0}
		let p = data.item  //即将要渲染的商品数据
		let host = 'http://www.codeboy.com/'
		return (
		  <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
			<Image source={{uri:host+p.pic}} style={{width:75,height:75}}/>
			<View style={{flex:1,justifyContent:'center'}}>
			  <Text numberOfLines={1}>{p.title}</Text>
			  <Text>{p.price}</Text>
			</View>
			<Button title="查看详情" onPress={()=>{
			  this.props.navigation.navigate('productDetail',{pid:p.lid})
			}}/>
		  </TouchableOpacity>
		)
	}
	_itemSeparatorComponent = ()=>{ //列表项间的分隔条
		return (
		  <View style={{height:0, borderTopWidth:1, 
			marginVertical:6, borderColor:'#aaa'}}></View>
		)
	}
	_listFooterComponent = ()=>{ //列表尾部组件
		//根据是否还有更多数据，显示“加载中”指示器或者“没有更多数据了”提示
		if(this.state.hasMore){
		  return <ActivityIndicator size="large"/>
		}else {
		  return <Button title="已经没有更多数据了" disabled/>
		}
	}
	_keyExtractor=(p, i)=>{
		return String(i)
	}
    render(){
		return (
		  <FlatList
			data={this.state.productList}
			renderItem={this._renderItem}
			keyExtractor={this._keyExtractor}
			ItemSeparatorComponent={this._itemSeparatorComponent}
			ListFooterComponent={this._listFooterComponent}
			onEndReached={this.loadMore}
			onEndReachedThreshold={0.1}
		  />
		)
    }
}