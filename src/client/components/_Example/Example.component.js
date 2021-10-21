import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsHelloSelector } from '@selectors/_example/hello.selector';
import { makeHello } from '@reducers/_example/hello.actions';

import styles from './Example.module.scss';

const Example = () => {
  const dispatch = useDispatch();
  const onMakeHelloClick = () => dispatch(makeHello());
  const isHello = useSelector(getIsHelloSelector);

  return (
    <>
      <button onClick={onMakeHelloClick}> Make Hello </button>
      <div className={styles.hello}> {isHello ? 'Hello!!' : 'Bye!!'} </div>
    </>
  );
};

export default Example;
