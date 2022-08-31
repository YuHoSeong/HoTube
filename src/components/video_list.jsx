import React from 'react';
import VideoItem from './video_item';
import styles from './video_list.module.css';

function VideoList(props) {
  return (
    <div className={styles.container}>
      <ul className={styles.videolist}>
        {props.videos.map((video) => {
          return <VideoItem key={video.id} video={video} />;
        })}
      </ul>
    </div>
  );
}

export default VideoList;
