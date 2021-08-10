import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import VideoItem from './VideoItem';

class VideoList extends Component{
  render(){
    const videosOpt = this.props.list_items.map((video,i) => {
      return <VideoItem videoSelect={this.props.onVidSelect} key={i} videos={video}/>
    })
    return(
      <div  className="four wide column">
        {videosOpt}
      </div>
    )
  }
}

export default VideoList;
