import React from 'react'
import {View, Text, Image, Button, TextInput, StyleSheet} from 'react-native'

export default class LoginScreen extends React.Component{
  //配置页头中的内容
  static navigationOptions = {
    title: '管理员登录'
  }

  constructor(){
    super()
    this.state = { 
      uname: '',  //管理员用户名
      upwd: '',   //管理员用户密码
    }
  }
  jumpToMain=()=>{
    this.props.navigation.navigate('main')
  }
  doUnameChange = (uname)=>{
    this.setState({uname})
  }
  doUpwdChange = (upwd)=>{
    this.setState({upwd})
  }
  doLogin = ()=>{
    let uname = this.state.uname
    let upwd = this.state.upwd
    //向服务器端API发起异步请求，验证用户名和密码是否正确
    let url = 'http://www.codeboy.com/data/user/login.php'
    let body = `uname=${uname}&upwd=${upwd}`
    let headers = {'Content-Type':'application/x-www-form-urlencoded'}

    //使用RN提供的Fetch API发起异步请求
    fetch(url,{method:'POST',headers,body}).then((res)=>{
      return res.json() //等待主体获取完成，再解析JSON主体
    }).then((body)=>{
      if(body.code===200){  //管理员登录成功
        this.props.navigation.navigate('main')
      }else {               //管理员登录失败
        alert(body.msg)
      }
    }).catch((err)=>{
      console.log(err)
    })

  }
  render(){
    return (
      <View style={ss.box}>  
        <TextInput value={this.state.uname} onChangeText={this.doUnameChange} style={ss.input} placeholder="请输入管理员用户名" placeholderTextColor="#85939d"/>
        <TextInput value={this.state.upwd} onChangeText={this.doUpwdChange} style={ss.input} placeholder="请输入用户登录密码" placeholderTextColor="#85939d" secureTextEntry={true}/>
        <View style={ss.btnBox}>
          <Button onPress={this.doLogin} title="登录"/>
        </View>
        <View style={ss.logoBox}>
          {/* <Image source={require('../assets/logo.png')}/> */}
          <Text style={ss.logoTitle}>后台管理系统</Text>
        </View>
        <Text style={ss.copy}>©2019,setJun.com版本所有</Text>
      </View>
    )
  }
}

let ss = StyleSheet.create({
  box: {
    paddingTop: 80,
    paddingHorizontal:40
  },
  input: {    //输入框
    borderBottomWidth: 1,
    borderBottomColor: '#85939d',
    padding:8,
    color: '#85939d',
    fontSize: 16,
  },
  btnBox: {    //“登录”按钮的容器
    paddingTop: 25,
    paddingBottom: 15
  },
  logoBox: {   //LOGO图标和文字的容器
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 340,
  },
  logoTitle: {  //LOGO标题文字
    fontSize: 30,
    color: '#85939d',
  },
  copy: {     //版权声明
    color: '#85939d',
    textAlign:'center',
    fontSize: 16
  }
})