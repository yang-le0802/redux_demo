import {INCREMENT,DECREMENT} from './action-types'
import {combineReducers} from 'redux'


function count (state=2,action){
    switch(action.type){
        case INCREMENT:
        return state + action.data
        case DECREMENT:
        return state - action.data
        default:
            return state
    }
    return 
}

const initUser = {}
function user(state=initUser,action){
    switch(action.type){
        default:
            return state
    }   
}


/* 
接收所有包含reducer函数的对象，返回一个新的reducer函数（总的reducer）
*/
export default combineReducers({
    count,
    user
})

/* 
一个reducer函数中的state直接表示状态的值
合并reducer函数中的state是一个对象，里面包含每个reducer函数状态的键值对
*/