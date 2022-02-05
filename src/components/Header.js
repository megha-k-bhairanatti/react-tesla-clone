import React, {useState}from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
   const [burgerStatus, setBurgerStatus] = useState(false);
   const cars = useSelector(selectCars);
   console.log(cars);
    return (
        <Container>
            <a>
                <img scr="/images/logo.svg" alt="Tesla logo" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                   <p> <a href="#" key={index}>{car}</a></p>
                ))}
                
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrap>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrap>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Energy</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BurgerNav>

        </Container>

    );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px; 
        flex-wrap: nowrap;
    }

    @media (max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px; 
        flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;

        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
   cursor: pointer;
`

const CloseWrap= styled.div`
    display: flex;
    justify-content: flex-end;
`