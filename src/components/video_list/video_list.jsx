import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

function VideoList({ videos, onVideoClick, display }) {
  return (
    // <div className={styles.container}>
    <ul className={styles.videolist}>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          />
        );
      })}
    </ul>
    // </div>
  );
}

export default VideoList;
