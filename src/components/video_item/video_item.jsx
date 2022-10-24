import React from 'react';
import styles from './video_item.module.css';

function Video_item({ video, video: { snippet }, onVideoClick, display }) {
  const detailDate = (a) => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  const nowDate = detailDate(new Date(video.snippet.publishedAt));

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
          <span className={styles.nowDate}>{nowDate}</span>
        </div>
      </div>
    </li>
  );
}

export default Video_item;
