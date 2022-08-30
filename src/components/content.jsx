import React from 'react';
import VideoItem from './video_item';

function Content(props) {
  // console.log(props.videos);
  // props.map((item) => console.log(item));
  return (
    <>
      {props.videos.map((video) => {
        return <VideoItem key={video.id} video={video} />;
      })}
    </>
  );
}

export default Content;
