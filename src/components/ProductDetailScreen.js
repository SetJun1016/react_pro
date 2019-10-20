import React from 'react'
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import MySlides from './MySlides';
import HTML2RN from './HTML2RN';

export default class ProductDetailScreen extends React.Component{
  //配置页头
  static navigationOptions = ((obj)=>{
    return {
      title: '商品'+obj.navigation.getParam('pid',999)+'的详情'
    }
  })

  constructor(){
    super()
    this.state = { 
      product: {}     //商品信息
    }
  }
  componentDidMount(){
    

    //组件挂载完成，读取商品列表组件传递过来的参数(要查询的商品编号)
    let pid = this.props.navigation.getParam('pid',999)
    let url = 'http://www.codeboy.com/data/product/details.php?lid='+pid
    //使用Fetch API发起异步请求，获取商品的详细信息
    fetch(url).then((res)=>{
      return res.json()
    }).then((body)=>{
      console.log(body.details)
      this.setState({  //把异步获取的商品数据保存到状态中
        product: body.details
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
  render(){
    let p = this.state.product  //使用临时变量保存商品数据
    return (
      <View style={{flex: 1, padding:5}}>
        <ScrollView>
          <Text>产品型号：{p.lname}</Text>
          <View style={ss.hr}></View>
          {/* 使用自定义的“轮播广告”组件 */}
          <MySlides picList={p.picList}/>
          <Text>{p.title}</Text>
          <Text>{p.subtitle}</Text>
          <Text>{p.price}</Text>
          <View style={ss.hr}></View>
          {/* HTML片段不可能在RN中渲染出来 */}
          {/* <Text>{p.details}</Text> */}
          <HTML2RN html={p.details}/>
        </ScrollView>
        <Button title="删除商品"/>
      </View>
    )
  }
}

let ss = StyleSheet.create({
  hr: {
    height: 0,
    borderTopColor: '#aaa',
    borderTopWidth: 1,
    marginVertical: 6
  }
})