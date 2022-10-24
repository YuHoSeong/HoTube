import styles from './app.module.css';
import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const searchRef = useRef();

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  function handleSearch() {
    youtube.search(searchRef.current.value).then((videos) => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  }
  function onVideoClick(video) {
    // console.log('click');
    setSelectedVideo(video);
    // console.log(video);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header searchRef={searchRef} onSearch={handleSearch}></Header>
      </div>
      <div className={styles.container_body}>
        <div className={styles.sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo}></VideoDetail>
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              onVideoClick={onVideoClick}
              videos={videos}
              display={selectedVideo ? 'list' : 'grid'}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
