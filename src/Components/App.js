import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../style.css'

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends Component{
  state = {
    videos: [],
    num: null,
    selectedVideoFile: null
  }
  formSubmitApi = async (value) => {
    const result = await youtube.get("/search",{
      params:{
        q: value
      }
    })
    this.setState({
      videos: result.data.items,
      num: result.data.items.length,
      selectedVideoFile: result.data.items[0]
    })
  }
  selecteVideo = (video) => {
    this.setState({
      selectedVideoFile: video
    })
  }
  componentDidMount() {
    this.formSubmitApi("Aime Malaika");
  }
  render(){
    return(
      <div className="App">
        <SearchBar executable={this.formSubmitApi} counter={this.state.num}/>
        <div className="ui grid">
          <VideoDetail thevideo={this.state.selectedVideoFile}/>
          <VideoList onVidSelect={this.selecteVideo} list_items={this.state.videos}/>
        </div>
      </div>
    )
  }
}

export default App;
