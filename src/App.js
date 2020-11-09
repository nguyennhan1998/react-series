import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(prop) {
    super(prop);
    this.state = {
          loginInfo : {
            name : '',
            phone : '',
          }
    }
    this.changValue = this.changValue.bind(this);
  }
  changValue(event){
      // eslint-disable-next-line no-unused-vars
     //b1 : lay state login infor
      let loginInfo = this.state.loginInfo;
      //b2 : lay name va gia tri cua the input
      let name=event.target.name;
      //b3 tham chieu den name
       loginInfo[name]=event.target.value;
       //b4 set lai state
       this.setState({loginInfo: loginInfo});
  }
  render() {
      let loginInfo = this.state.loginInfo;
    return (
        <div>
            <input type="text" className="form-control" name="name" onChange={this.changValue} placeholder="Enter Name"/>
          <input type="text" className="form-control" name="phone" onChange={this.changValue} placeholder="Enter Phone"/>
            <p></p>
            <p>
                <span>{loginInfo.name}</span> /  <span>{loginInfo.phone}</span>
            </p>
        </div>
    );
  }


}

export default App;
