import React from 'react';
import { useDispatch } from 'react-redux';
import { makeHello } from '@client/store/reducers/hello/hello.actions';

const MainPage = () => {
  const dispatch = useDispatch();
  const onMakeHelloClick = () => dispatch(makeHello());
  return (
    <>
      <button onClick={onMakeHelloClick}> Make Hello </button>
      <div>Hello! {WITH_SSR ? 'with-ssr' : 'without-ssr'}</div>
    </>
  );
};

export default MainPage;
