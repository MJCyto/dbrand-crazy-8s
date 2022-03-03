import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Card = props => {
  const { face, suit } = props;

  return <Wrapper>{`${face} - ${suit}`}</Wrapper>;
};

export default Card;
