import React from 'react';
import styles from './video_item.module.css';

function Video_item(props) {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={props.video.snippet.thumbnails.default.url}
          alt="thumbnail"
        />
        <div className={styles.description}>
          <span className={styles.title}>{props.video.snippet.title}</span>
          <span className={styles.channel}>
            {props.video.snippet.channelTitle}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Video_item;
