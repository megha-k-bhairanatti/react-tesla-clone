import React from 'react';
import styled from 'styled-components';

function Section({title, description, leftButtonText, rightButtonText, backgroundImg}) {
  return <Wrap bgImage={backgroundImg}>
    <ItemText>
      <h1>{title}</h1>
      <p>{description}</p>
    </ItemText>
    <Buttons>
      <ButtonGroup>
        <LeftButton>{leftButtonText}</LeftButton>
        {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
      </ButtonGroup>
      <DownArrow src='/images/down-arrow.svg'/>
    </Buttons>

  </Wrap>;
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
      flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: 600;

`
// inhert css of LeftButton
const RightButton = styled(LeftButton)` 
    background: white;
    opacity: 0.65;
    color: #393c41;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`
`