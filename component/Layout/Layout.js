import React, { Component } from "react";
import Header from "../Header/Header";
import "../styles/index.scss";
const Layout = props => {
    return (
        <>
            <Header /> {props.children}
        </>
    );
};

export default Layout;
