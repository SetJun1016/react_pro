import React from 'react'
import { View,Text,Image,Button,TextInput,StyleSheet } from 'react-native'

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        title : '管理员登录'
    }
    constructor(){
        super()
        this.state = {
			uname:"",
			upwd:"",
        }
	}
	doUnameChange = (uname) => {
		this.setState({
			uname
		})
	}
	doUpwdChange = (upwd) => {
		this.setState({
			upwd
		})
	}
    // jumpToMain = ()=>{
    //     console.log(this.props)
    //     // App组件传递props:navigation
    //     this.props.navigation.navigate('main')
	// }
	doLogin = () => {
		let uname = this.state.uname;
		let upwd = this.state.upwd;
		let url = 'http://www.codeboy.com/data/user/login.php'
		let body = `uname=${uname}&upwd=${upwd}`
		let headers = {'Content-Type':'application/x-www-form-urlencoded'}
		fetch(url,{
			method: "POST",
			headers,
			body
		}).then((res) => {
			return res.json()
		}).then((body) => {
			if(body.code === 200){
				this.props.navigation.navigate('main')
			} else {
				alert(body.msg)
			}
		}).catch((err) => {
			alert("未知的错误，sorry")
		})
	}
    render(){
        return(
            <View style = {ss.box}>
                <TextInput value = {this.state.uname} onChangeText = {this.doUnameChange} style = {ss.input} placeholder = "请输入管理员用户名"/>
				<TextInput value = {this.state.upwd} onChangeText = {this.doUpwdChange} style = {ss.input} placeholder = "请输入用户登录密码" placeholderTextColor = "#85939d" secureTextEntry = {true}/>
				<View style = {ss.btn}>
					<Button onPress = {this.doLogin} title = "登录"></Button>
				</View>
				<View>
					<Image source = {require('../assets/logo.png')}></Image>
					<Text style = {ss.logTitle}>后台管理系统</Text>
				</View>
				<Text style = {ss.copy}>©2017，版权所有，setJun.com</Text>
            </View>
        )
    }
}
let ss = StyleSheet.create({
	box: {
		paddingTop:80,
		paddingHorizontal:40
	},
	input:{
		borderBottomWidth:1,
		borderBottomColor:"#85939d",
		padding:8,
		color:"#85983d"
	},
	btn: {
		paddingTop:25,
		paddingBottom:35,
	},
	logTitle: {
		textAlign:"center",
		fontSize:30,
		color:"#85943d"
	},
	copy: {
		color:"#85939d",
		textAlign:"center",
		fontSize:16
	}
})
