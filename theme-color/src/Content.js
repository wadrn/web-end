import React,{Component,PropTypes} from 'react'
import ThemeSwitch from './ThemeSwitch'
class Content extends Component{
    static contextTypes ={
        store:PropTypes.object
    };
    constructor(){
        super();
        this.state ={
            themeColor:''
        }
    }
    componentWillMount(){
        const {store} = this.context;
        this._updateThemeColor();
        store.subscribe(()=>this._updateThemeColor())
    }
    _updateThemeColor(){
        const {store} = this.context;
        const state = store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }
    render(){
        return(
            <div>
                <p style={{color:this.state.themeColor}}>这是内容</p>
                <ThemeSwitch/>
            </div>
        )
    }
}
export default Content