import React from 'react'
import { View,Text,Image,Button } from 'react-native'

export default class ProductListScreen extends React.Component{
    static navigationOptions = {
        title : '商品列表',
    }
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <View>
                <Text>商品</Text>
                <Button title="查看商品8的详情" onPress={()=>{this.props.navigation.navigate('productDetail',{age:20, pid:8})}}/>
                <Button title="查看商品13的详情" onPress={()=>{this.props.navigation.navigate('productDetail', {age:30, pid:13})}}/>
                <Button title="查看商品21的详情" onPress={()=>{this.props.navigation.navigate('productDetail', {age:40, pid:21})}}/>
            </View>
        )
    }
}