import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return <Container>
        <Section 
            title='Model S'
            description='Order Online for Touchless Delivery'
            leftButtonText='Custom Order'
            rightButtonText='Existing Inventory'
            backgroundImg='model-s.jpg'
        />
        <Section 
            title='Model Y'
            description='Order Online for Touchless Delivery'
            leftButtonText='Custom Order'
            rightButtonText='Existing Inventory'
            backgroundImg='model-y.jpg'
        />
        <Section
            title='Model 3'
            description='Order Online for Touchless Delivery'
            leftButtonText='Custom Order'
            rightButtonText='Existing Inventory'
            backgroundImg='model-3.jpg'
        />
        <Section 
            title='Model X'
            description='Order Online for Touchless Delivery'
            leftButtonText='Custom Order'
            rightButtonText='Existing Inventory'
            backgroundImg='model-x.jpg'
        />
        <Section 
            title='Solar and Powerwall'
            description='Power Everything'
            leftButtonText='Learn More'
            backgroundImg='solar-panel.jpg'
        />
        <Section 
            title='Accessories'
            description=''
            leftButtonText='Shop Now'
            backgroundImg='accessories.jpg'
        />
    </Container>;
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
