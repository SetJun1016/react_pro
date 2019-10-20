import React from 'react'
import {View, Image, Dimensions, StyleSheet} from 'react-native'

export default class MySlides extends React.Component{
  timer = null   //驱动轮播广告动起来的定时器

  constructor(){
    super()
    this.state = {
      curIndex: 0   //当前要显示的轮播图片下标 current
    }
  }
  componentWillUnmount(){
    //组件即将卸载时，必须清除使用的定时器
    clearInterval( this.timer )
  }
  render(){
    //console.log(this.props.picList)  //异步获取的属性值，第一次渲染时，其值为undefined；异步获取数据后，应该是[]
    if(this.props.picList){ //已经异步获取到轮播图片
      if(this.timer===null){
        //定时器尚未启动，启动一次即可 
        this.timer = setInterval(()=>{
          let curIndex = this.state.curIndex
          curIndex++
          if(curIndex>=this.props.picList.length){
            curIndex = 0 //已经轮播到最后一张，重回第0张
          }
          this.setState({ curIndex })
        }, 2000)
      }
      return (
        <View>
          <Image style={ss.fullWidth} source={{uri: 'http://www.codeboy.com/' + this.props.picList[this.state.curIndex].md }}/>
        </View>
      )
    }else { //轮播图片尚未获取到
      return (
        <View>
          <Image style={ss.fullWidth} source={require('../assets/loading.jpg')}/>
        </View>
      )
    }
  }
}

let ss = StyleSheet.create({ 
  fullWidth: {  //让元素的宽和高都等于窗口宽度
    width: Dimensions.get('window').width-10,
    height: Dimensions.get('window').width-10,
  }
})