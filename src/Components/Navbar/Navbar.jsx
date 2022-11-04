import React from 'react';
import NxtWaveLogo from '../../Assets/NxtWaveLogo'
import userPic from '../../Images/userPic.png';
import { RightSideContainer, Nav, UserImage } from './Styles'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'

const Navbar = () => {

    const Navigate = useNavigate();
    const location = useLocation();

    return (
        <Nav>
            <Link to='/'>
                <NxtWaveLogo />
            </Link>
            <RightSideContainer>
                {!location.pathname.includes('/addResource') && (<Button text="ADD ITEM" variant="success" onClick={() => Navigate("home/addResource")} />)}
                <UserImage src={userPic} alt="user" />
            </RightSideContainer>
        </Nav>
    )
}

export default Navbar;