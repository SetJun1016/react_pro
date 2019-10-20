import React from 'react'
import {Image,StyleSheet,Dimensions} from 'react-native'

//把原本宽和高各异的图片，统一为：
//宽度为屏幕宽度，高度与原图等比例缩放
//假设屏幕宽为500,   
//原图为100x50，需要缩放为：500x250
//原图为1000x2000，需要所方位：500x1000
export default class MyImage extends React.Component{
  constructor(){
    super()
    this.state = {
      //originWidth: 0,   //图片原始宽度
      //originHeight: 0,  //图片原始高度
      displayWidth: Dimensions.get('window').width-10,  //图片要显示出来的宽度
      displayHeight: 0, //图片要显示出来的高度
    }
  }
  componentDidMount(){
    //组件挂载完后，需要获取其原始的宽和高，从而计算出要显示的高度
    Image.getSize(this.props.uri, (w, h)=>{
      let displayWidth = this.state.displayWidth
      let displayHeight = h * displayWidth / w
      this.setState({
        displayHeight: displayHeight
      })
    })
  }
  render(){
    return <Image source={{uri:this.props.uri}} style={{width:this.state.displayWidth, height: this.state.displayHeight}}/>
  }

}