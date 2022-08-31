import React, { useEffect, useState } from 'react';
import VideoList from './video_list';
import Sidebar from './sidebar';
import styles from './contents.module.css';
import {
  faHouse,
  faThumbsUp,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

function Contents(props) {
  // eslint-disable-next-line
  const [sidemenus, setSidemenus] = useState([
    { id: 1, icon: faHouse, title: 'home' },
    { id: 2, icon: faThumbsUp, title: 'like' },
    { id: 3, icon: faClockRotateLeft, title: 'history' },
  ]);

  // eslint-disable-next-line
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar sidemenus={sidemenus}></Sidebar>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default Contents;
