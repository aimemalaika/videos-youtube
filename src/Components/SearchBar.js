import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'

class SearchBar extends Component{
  state = {
    value: "Aime Malaika"
  }
  submitForm = (e) => {
    console.log(e);
    e.preventDefault()
    this.props.executable(this.state.value)
  }
  onInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return(
      <div>
        <form ref={this.formtosubmit} className="ui form" onSubmit={this.submitForm}>
          <div className="ui category search">
            <div className="ui icon input">
              <input type="text" value={this.state.value} className="prompt" onChange={this.onInputChange} placeholder="Search ..."/>
              <i className="search icon"></i>
            </div>
          </div>
        </form>
        <h3>Video Found : {this.props.counter}</h3>
        <hr/>
      </div>
    )
  }
}

export default SearchBar;
