import YouTube from 'react-youtube'
import React, { Component } from 'react';

// This is a video container that holds an embedded video
class VideoPromptContainer extends Component {
  
  // EVENT HANDLER: toggle video play on click
  videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      // render method
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