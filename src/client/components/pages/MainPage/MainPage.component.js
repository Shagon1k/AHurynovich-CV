import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsHelloSelector } from '@selectors/hello.selector';
import { makeHello } from '@reducers/hello/hello.actions';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const onMakeHelloClick = () => dispatch(makeHello());
  const isHello = useSelector(getIsHelloSelector);

  return (
    <>
      <button onClick={onMakeHelloClick}> Make Hello </button>
      <div className={styles.hello}> {isHello ? 'Hello!' : 'Bye!'} </div>
    </>
  );
};

export default MainPage;
