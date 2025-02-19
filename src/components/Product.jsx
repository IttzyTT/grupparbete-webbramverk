import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ITEM render/function
function Product({ item }) {
  return (
    <Wrapper>
      <Link to={`/Item/${item['_id']}`}>
        <Imgcontainer>
          <img src={item.image} alt="logo" />
        </Imgcontainer>
        <Infocontainer>
          <TitleContainer>
            <Title>{`${item.title.substring(0, 26)}`}</Title>
          </TitleContainer>

          <Description>{`${item.description.substring(0, 225)}...`}</Description>
          <PriceDiv>
            <Price>
              <Span>$</Span>
              {item.price}
            </Price>
            <Stock>In stock: {item.stock}</Stock>
          </PriceDiv>

          <Btn>ADD TO CART</Btn>
        </Infocontainer>
      </Link>
    </Wrapper>
  );
}

export default Product;

// Styling
const Wrapper = styled.div`
  width: 18rem;
  height: 26rem;
  padding: 1rem;
  margin-bottom: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
`;
const Infocontainer = styled.div`
  height: 14rem;
`;
const Imgcontainer = styled.div`
  height: 140px;

  margin: 0 auto;
  img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
`;
const TitleContainer = styled.div`
  margin-bottom: 0.4rem;
`;
const Title = styled.h1`
  color: #242424;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 0.8rem;
`;
const Description = styled.p`
  font-size: 0.7rem;
  height: 6rem;
`;
const PriceDiv = styled.div`
  margin-top: 0.9rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #f34e1eca;
`;
const Span = styled.span`
  color: #f34e1ebb;
  font-size: 1.2rem;
  font-weight: 700;
`;
const Btn = styled.button`
  width: 16rem;
  height: 2.5rem;
  border: none;
  color: whitesmoke;
  background-color: #f34e1ebb;
  font-size: 1rem;

  &:hover {
    background-color: #f34e1edd;
  }
`;
const Stock = styled.p`
  font-size: 0.65rem;
  margin-left: 0.2rem;
`;
