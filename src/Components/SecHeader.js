import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GrPersonalComputer} from "react-icons/gr";
import {CgAppleWatch} from "react-icons/cg";
import {SiApplepay, SiApplepodcasts, SiAppletv, SiApplemusic} from "react-icons/si";
import "./SecHeader.css";
import {BsTablet, BsPhone, BsHeadphones , BsEarbuds} from "react-icons/bs";
import { Container, Nav } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';



export default function SecHeader() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <div className = "logos">
            <Navbar.Brand>
            <BsPhone />{' '}
            <SiApplemusic />{' '}
            <BsEarbuds /> {' '}
            <SiApplepay />{' '}
            <SiAppletv />{' '}
            <SiApplepodcasts />{' '}
            <BsTablet/>{' '}
            <GrPersonalComputer />{' '}
            <CgAppleWatch />{' '}
            <BsHeadphones />{' '}
            </Navbar.Brand>
            </div>
            </Container>
        </Navbar>
    )
}
