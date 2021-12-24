import React from 'react';
import styled, { css } from 'styled-components';
import '../App.css';

import { increaseCount, decreaseCount } from '../actions'
import { useSelector, useDispatch } from 'react-redux';




const Controllers = (props) => {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch();
  const PlusButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  padding: 20px 50px;
  margin: 10px;
  background-color: rgb(240, 135, 196);
  `
  const MinusButton = styled(PlusButton)`
  background-color: rgb(104, 207, 238);
`;
  return (
    <div className="Controllers">
      <PlusButton  onClick={() => dispatch(decreaseCount(count))}>-</PlusButton>
      <MinusButton  onClick={() => dispatch(increaseCount(count))}>+</MinusButton>
    </div>
  )
}

export default Controllers