import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { intiateLoading } from '../store/common/actions';

export default () => {
  const isLoading = useSelector(state => state.common.loading);
  const dispatch = useDispatch();
  return (
    <>
      <p>Main Body</p><br/>
      <p>isLoading: {isLoading?'Loading':'Not Loading'}</p>
      <Button
       type={"primary"}
       onClick={()=>dispatch(intiateLoading(!isLoading))}
      >
        {
          isLoading?"Stop Loading":"Start Loading"
        }
      </Button>
    </>
  )
}