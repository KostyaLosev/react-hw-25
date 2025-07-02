import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
    margin-top: 30px;
    background: #35B8BE;
    border: none;
    color: white;
    padding: 15px 30px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
    max-width: 194px;
    &:hover {
    background: #439599;
    }
`
const PlaceAndOrderButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu'); 
  };

  return <Button onClick={handleClick}>Place an Order</Button>;
};

export default PlaceAndOrderButton;