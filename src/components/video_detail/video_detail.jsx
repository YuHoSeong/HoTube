import React from 'react';
import styles from './video_detail.module.css';

function VideoDetail({ video }) {
  return <div>{video.snippet.title}</div>;
}

export default VideoDetail;
