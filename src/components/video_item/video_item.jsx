import React from 'react';
import styles from './video_item.module.css';

function Video_item({ video, video: { snippet }, onVideoClick, display }) {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.default.url}
          alt="thumbnail"
        />
        <div className={styles.description}>
          <span className={styles.title}>{snippet.title}</span>
          <span className={styles.channel}>{snippet.channelTitle}</span>
        </div>
      </div>
    </li>
  );
}

export default Video_item;
