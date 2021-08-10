import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'

class VideoDetail extends Component{
  returnContent = () => {
    if(this.props.thevideo !== null){
      const vrl = "https://www.youtube.com/embed/"+this.props.thevideo.id.videoId
      return <div className="ui segment">
            <div className="ui header">
              <div className="ui embed">
                <iframe title="This is a unique title" src={vrl} />
              </div>
              <h3>{this.props.thevideo.snippet.title}</h3>
              <p style={{fontSize: '12px'}}>{this.props.thevideo.snippet.description}</p>
            </div>
      </div>
    }
  }
  render(){
    return(
      <div className="twelve wide column">
        {this.returnContent()}
      </div>
    )
  }
}

export default VideoDetail;
