import React,{Component} from 'react'

class AppleItem extends Component{
    render(){
        return(
            <div className="appleItem">
                <div className="apple"><img src="" alt=""/></div>
                <div className="info">
                    <span className="name">红苹果 - 1号</span>
                    <span className="weight">238克</span>
                </div>
                <div className="btn"><button>吃掉</button></div>
            </div>
        )
    }
}
export default AppleItem