import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'

class VideoItem extends Component{
  state = {
    selectedVideo: null
  }
  selecteVideo = (e) => {
    this.props.videoSelect(this.props.videos)
  }
  render(){
    return(
      <div onClick={this.selecteVideo} style={{cursor:'pointer'}}>
        <img style={{width:'100%'}} src={this.props.videos.snippet.thumbnails.default.url} alt=""/> 
        <p style={{fontSize: '12px'}}>{this.props.videos.snippet.title}</p>
        <hr/>
      </div>
    )
  }
}

export default VideoItem;
