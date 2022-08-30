import React, { useEffect, useState } from 'react';
import Content from './content';
import Sidebar from './sidebar';

function Contents(props) {
  // eslint-disable-next-line
  const [sidemenus, setSidemenus] = useState([
    { id: 1, icon: 'fa-solid fa-house', title: 'home' },
    { id: 2, icon: 'fa-solid fa-thumbs-up', title: '좋아요한 동영상' },
    { id: 3, icon: 'fa-solid fa-clock-rotate-left', title: '시청기록' },
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
    <>
      <Sidebar sidemenus={sidemenus}></Sidebar>
      <Content videos={videos}></Content>
    </>
  );
}

export default Contents;
