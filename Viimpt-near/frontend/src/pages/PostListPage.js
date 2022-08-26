import React, { useState } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import axios from "axios";
import NewsList from "../components/common/NewsList";

//95b8d71da2cc44268cde62d495c1e41b
const PostListPage = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=95b8d71da2cc44268cde62d495c1e41b"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <>
      <HeaderContainer />
      <div>
        <NewsList />
      </div>
    </>
  );
};

export default PostListPage;
