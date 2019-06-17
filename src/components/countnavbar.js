import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Countnavbar = ({totalCount}) => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">
                Navbar <span className="badge badge-pill badge-primary">{totalCount}</span>
            </Navbar.Brand>
        </Navbar>
    );
};

export default Countnavbar;