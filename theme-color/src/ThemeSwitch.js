import React,{Component,PropTypes} from 'react'

class ThemeSwitch extends Component{
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
        store.subscribe(()=>this._updateThemeColor());
    }
    _updateThemeColor(){
        const {store} = this.context;
        const state = store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }
    handleSwitchColor(color){
        const {store} = this.context;
        store.dispatch({
            type:'CHANGE_COLOR',
            themeColor:color
        })
    }
    render(){
        return(
            <div>
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'green')}>green</button>
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'red')}>red</button>
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'blue')}>blue</button>
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'black')}>black</button>
            </div>
        )
    }
}
export default ThemeSwitch