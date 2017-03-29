
function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
    if (newAppState === oldAppState) return // 数据没有变化就不渲染了
    console.log('render app...')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return // 数据没有变化就不渲染了
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent = {}) {
    if (newContent === oldContent) return // 数据没有变化就不渲染了
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}
function createStore(reducer){
    let state =null;
    const listeners =[];
    const subscribe = (listener)=>listeners.push(listener);
    const getState = ()=>state;
    const dispatch =(action)=>{
        state = reducer(state,action);
        listeners.forEach((listener)=>listener())
    };
    dispatch({});
    return {
        getState,
        dispatch,
        subscribe
    }
}

function reducer(state,action) {
    if(!state){
        return {
            title:{
                text:'drn',
                color:'red'
            },
            content:{
                text:'redux',
                color:'green'
            }
        }
    }
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            // state.title.text = action.text;
            return {
                ...state,
                title:{
                    ...state.title,
                    text:action.text
        }
            };
            break;
        case 'UPDATE_TITLE_COLOR':
            // state.title.color =action.color;
            return {
                ...state,
                title:{
                    ...state.title,
                    color:action.color
                }
            };
            break;
        default:
            return state;
            break;
    }
}

const store = createStore(reducer);
let oldState =store.getState();

store.subscribe(()=>
{
    const newState = store.getState();
    renderApp(newState,oldState);
    oldState = newState;
});
renderApp(store.getState());
const actionA = {
    type:'UPDATE_TITLE_COLOR',
    color:'blue'
};
const actionB ={
    type:'UPDATE_TITLE_TEXT',
    text:'我的内容变了',
};
store.dispatch(actionA);
store.dispatch(actionB);
