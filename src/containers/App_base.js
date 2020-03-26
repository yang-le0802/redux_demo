/* 
容器组件，通过connect包装UI组件产生的组件
*/
import React,{Component} from 'react' 
import {connect} from 'react-redux'

import Counter from '../component/Counter'
import {increment,decrement} from '../redux/actionCreators'

const mapStateToProps=(state)=>({count:state})
/* //以函数的方式写，会自动调用该函数返回一个对象，将对象里的方法作为函数参数传递给UI组件
const mapDispatchToProps=(dispatch)=>({
    increment:(number)=>dispatch(increment(number)),
    decrement:(number)=>dispatch(decrement(number)),
}) */

//以对象的方式写，将对象中的方法包装成一个新的函数，并传入UI组件
const mapDispatchToProps={increment,decrement}


/* //普通写法
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter) */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)