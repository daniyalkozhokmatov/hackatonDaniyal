import { Container } from '@material-ui/core';
import React from 'react';
import Content from '../components/Content';
import LeftSidebar from '../lefts/LeftSidebar'
import Navbar from '../Navbar/Navbar';
import RightSidebar from '../rightSidebar'


const MainPage = () => {
    return (
        <div>
            <Navbar />

            <Container>
                <div className="main">
                    <LeftSidebar/>
                    <Content />
                    <RightSidebar/>
                    <Navbar/>
                </div>
            </Container>
        </div>
    );
};

export default MainPage;