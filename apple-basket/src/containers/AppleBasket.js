import React,{Component} from 'react'
import '../styles/AppleBasket.css'
class AppleBasket extends Component{
    render(){
        return(
            <div className='appleBasket'>
                <div className="title">苹果篮子</div>
                <div className="status">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">0个苹果，0克</div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">2个苹果，480克</div>
                    </div>
                </div>
                <div className="appleList">
                    <div className="empty-tip">苹果篮子空空如也</div>
                </div>
                <div className="btn">
                    <button>摘苹果</button>
                </div>
            </div>
        )
    }
}
export default AppleBasket