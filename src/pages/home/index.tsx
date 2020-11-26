import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkLogin, selectToken, selectErrMsg } from '@/store/modules/app';
import css from './index.module.less';

const Home = () => {
  const token = useSelector(selectToken);
  const errMsg = useSelector(selectErrMsg);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin({ username: '1', password: '2', verifyCode: 'c' }));
  }, []);

  return (
    <div className={css['home']}>
      home{token}
      {errMsg}
    </div>
  );
};

export default Home;
