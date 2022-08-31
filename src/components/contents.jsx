import React, { useEffect, useState } from "react";
import VideoList from "./video_list";
import Sidebar from "./sidebar";

function Contents(props) {
  // eslint-disable-next-line
  const [sidemenus, setSidemenus] = useState([
    { id: 1, icon: "fa-solid fa-house", title: "home" },
    { id: 2, icon: "fa-solid fa-thumbs-up", title: "좋아요한 동영상" },
    { id: 3, icon: "fa-solid fa-clock-rotate-left", title: "시청기록" },
  ]);

  // eslint-disable-next-line
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
<<<<<<< HEAD
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
=======
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDyJyuKjkFf7sFJ7qgf9Wy5or87E8XWwLg",
>>>>>>> 95053e2 (CSS: navbar)
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Sidebar sidemenus={sidemenus}></Sidebar>
      <VideoList videos={videos}></VideoList>
    </>
  );
}

export default Contents;
