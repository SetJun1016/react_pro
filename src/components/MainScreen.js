import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

export default class MainScreen extends React.Component{
  //配置页头
  static navigationOptions = {
    title: '主菜单',
    headerRight: (
      <TouchableOpacity>
        <Image style={{width:36,height:36, borderRadius:18}} source={require('../assets/user.png')}/>
      </TouchableOpacity>
    )
  }

  constructor(){
    super()
    this.state = { } 
  }
  jumpToList = ()=>{
    this.props.navigation.navigate('productList')
  }
  render(){
    return (
      <View>
        {/* 统计信息*/}
        <View style={ss.stat}>
          <View style={ss.row}>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>上架商品总数</Text>
              <Text style={[ss.textLg, ss.textDanger]}>24,380</Text>
              <Text style={[ss.textSm, ss.textSuccess]}>+128%较上月</Text>
            </View>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>注册用户总数</Text>
              <Text style={[ss.textLg, ss.textPrimary]}>1,965</Text>
              <Text style={[ss.textSm, ss.textDanger]}>-50%较上月</Text>
            </View>
          </View>
          <View style={ss.row}>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>上架商品总数</Text>
              <Text style={[ss.textLg, ss.textSuccess]}>24,380</Text>
              <Text style={[ss.textSm, ss.textSuccess]}>+128%较上月</Text>
            </View>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>当日PC端PV量</Text>
              <Text style={[ss.textLg, ss.textDanger]}>14,281</Text>
              <Text style={[ss.textSm, ss.textDanger]}>-30%较上周</Text>
            </View>
          </View>
          <View style={ss.row}>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>当日移动端PV量</Text>
              <Text style={[ss.textLg, ss.textPrimary]}>29,315</Text>
              <Text style={[ss.textSm, ss.textPrimary]}>+34%较上周</Text>
            </View>
            <View style={ss.col}>
              <Text style={[ss.textMd, ss.textPrimary]}>App总下载量</Text>
              <Text style={[ss.textLg, ss.textSuccess]}>7,422</Text>
              <Text style={[ss.textSm, ss.textDanger]}>+18%较上周</Text>
            </View>
          </View>
        </View>
        {/* 功能菜单 */}
        <View style={ss.menu}>
          <View style={ss.row}>
            <View style={[ss.col, ss.menuCol]}>
              <TouchableOpacity onPress={this.jumpToList}>
                <Image source={require('../assets/menu_product.jpg')}/>
                <Text style={[ss.textMd, ss.textPrimary]}>商品管理</Text>
              </TouchableOpacity>
            </View>
            <View style={[ss.col, ss.menuCol]}>
              <TouchableOpacity>
                <Image source={require('../assets/menu_user.jpg')}/>
                <Text style={[ss.textMd, ss.textPrimary]}>用户管理</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ss.row}>
            <View style={[ss.col, ss.menuCol]}>
              <TouchableOpacity>
                <Image source={require('../assets/menu_order.jpg')}/>
                <Text style={[ss.textMd, ss.textPrimary]}>订单管理</Text>
              </TouchableOpacity>
            </View>
            <View style={[ss.col, ss.menuCol]}>
              <TouchableOpacity>
                <Image source={require('../assets/menu_refresh.jpg')}/>
                <Text style={[ss.textMd, ss.textPrimary]}>首页管理</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

let ss = StyleSheet.create({
  stat: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  }, 
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#85939d',
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  textLg: {
    fontSize: 26,
    paddingVertical: 2,
  },
  textMd: {
    fontSize: 18,
    paddingVertical: 3,
  },
  textSm: {
    fontSize: 16,
    paddingVertical: 3,
  },
  textPrimary: {
    color: '#85939d'
  },
  textDanger: {
    color: '#e74c3c'
  },
  textSuccess: {
    color: '#1abb9c'
  },
  menuCol: {
    //borderWidth: 0,   //不能覆盖borderBottomWidth
    borderRightWidth: 0,
    borderBottomWidth: 0,
    padding: 15
  }
})