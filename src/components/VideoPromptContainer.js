import YouTube from 'react-youtube'
import React, { Component } from 'react';

class VideoPromptContainer extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target);
      }
    
    render() {
        const opts = {
          height: '585',
          width: '960',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
     
        const {videoId} = this.props    
        return (
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this.videoOnReady}
          />
        );
      }
     
     
}

export default VideoPromptContainer;