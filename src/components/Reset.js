import React from 'react';
import styled, { css } from 'styled-components';
import '../App.css'

import { resetCount } from '../actions'
import { useDispatch } from 'react-redux'

const Reset = () => {
  const ResetButton = styled.button`
  cursor: pointer;
  font - size: large;
  border: none;
  padding: 20px 50px;
  background-color: rgb(248, 238, 96);
  `
  const dispatch = useDispatch()
  return (
    <div className="Reset">
      <ResetButton onClick={() => dispatch(resetCount())}>Reset</ResetButton>
    </div>
  )
}

export default Reset