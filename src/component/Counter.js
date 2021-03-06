/* 
UI组件
*/
import React,{Component} from 'react'
import PropTypes from 'prop-types'


export default class Counter extends Component{

    static propTypes = {
       count:PropTypes.number.isRequired,
       increment:PropTypes.func.isRequired,
       decrement:PropTypes.func.isRequired,
       incrementAsync:PropTypes.func.isRequired
    }

    increment=()=>{
        const number = this.numberRef.current.value*1
        this.props.increment(number)
    }
    decrement=()=>{
        const number = this.numberRef.current.value*1
        this.props.decrement(number)
    }
    incrementIfOdd=()=>{
        const number = this.numberRef.current.value*1
        if(this.props.count%2===1){
            this.props.increment(number)
        }  
    }
    incrementAsync=()=>{
        const number = this.numberRef.current.value*1
        this.props.incrementAsync(number)
    }

    constructor(props){
        super(props)
        this.numberRef = React.createRef()
    }

    render(){
        const count = this.props.count
        return (
        <div>
            <p>click {count} times</p>
            <div>
                <select ref={this.numberRef}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;
            </div>
        </div>            
        )
    }
}