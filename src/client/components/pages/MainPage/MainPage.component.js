import React from 'react';

const MainPage = () => {
  return <div>Hello! {WITH_SSR ? 'with-ssr' : 'without-ssr'}</div>;
};

export default MainPage;
