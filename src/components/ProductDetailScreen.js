import React from 'react'
import { View,Text,Image } from 'react-native'

export default class ProductDetailScreen extends React.Component{
    static navigationOptions = (obj)=>{
        return {
            title : '商品' + obj.navigation.getParam('pid') + '的详情'
        }
	}
	
    constructor(){
        super()
        this.state = {

        }
    }
    componentDidMount(){
        console.log(this.props.navigation.state.params)
        let pid = this.props.navigation.getParam('pid',999)
        console.log(pid)
    }
    render(){
        return(
            <View>
                <Text>详情</Text>
            </View>
        )
    }
}