import React from 'react'
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native'
import MyImage from './MyImage'

//把this.props.html中的<img>转换为<Image/>
export default class HTML2RN extends React.Component{
  render(){
    if(this.props.html){
      //从原始的HTML片段中截取其中所有的图片路径
      let list = this.props.html.match( /img\/\S+\.jpg/g )
      console.log(list) //['img/x.jpg', '', '']
      return (
        <View>
          {
            list.map((e, i)=>{
              return <MyImage key={i} uri={'http://www.codeboy.com/'+e}/>
            })
          }
        </View>
      )
    }else {
      return <Text>内容加载中...</Text>
    }
  }
}