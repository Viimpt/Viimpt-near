import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import NewsList from "../components/common/NewsList";
//95b8d71da2cc44268cde62d495c1e41b
const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <div>
        <NewsList />
      </div>
    </>
  );
};

export default HomePage;
