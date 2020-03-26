/* 
容器组件，通过connect包装UI组件产生的组件
*/
import React,{Component} from 'react' 
import {connect} from 'react-redux'

import Counter from '../component/Counter'
import {increment,decrement,incrementAsync} from '../redux/actionCreators'


export default connect(
    state=>({count:state.count}),
    {increment,decrement,incrementAsync}
)(Counter)