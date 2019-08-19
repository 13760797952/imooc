import React from 'react';
import {Button,WingBlank} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component{
  render(){
    let boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <Once boss="张大喵1"></Once>
        <Ride boss="孙德胜"></Ride>
      </div>
    )
  }
}

function Ride(props){
  return <h2>骑兵连连长：{props.boss},高大威猛</h2>
}

// 组件名首字母必须为大写
class Once extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      solders:['甲','乙','丙']
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  addSolder = () => {
    this.setState({
      solders:[...this.state.solders,'新兵'+ Math.ceil(Math.random()*100)]
    })
  }
  render(){
    return (
      <div>
        <h2>一营营长：{this.props.boss}</h2>
        {/* <button onClick={()=>this.addSolder()}>新兵入伍</button> */}
        <WingBlank>
          <Button type="primary" onClick={this.addSolder}>新兵入伍</Button>
        </WingBlank>
        <ul>
          {this.state.solders.map(v=>{
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
