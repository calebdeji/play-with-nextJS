import React, { Fragment, useState } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../../component/Layout/Layout";
import Head from "next/head";
import "./eachshow.scss";
import Link from "next/link";
const UniqueShow = (props) => {
    const {
        isError,
        show: {
            name,
            image: { original },
            summary,
            url,
        },
        errorMessage,
    } = props;
    const [showErrorMessage, setshowErrorMessage] = useState(false);
    const toggleShowErrorMessage = () => {
        setshowErrorMessage((prevState) => !prevState);
    };
    return (
        <Fragment>
            <Head>
                <title> Calebdeji | show | {name}</title>
            </Head>
            <Layout>
                {!isError ? (
                    <main className='show'>
                        <img src={original} alt={`${name} image`} className='show__image' />
                        <h1> {name}</h1>
                        <p className='show__summary'>{summary.replace(/<[/]?[pb]>/g, "")}</p>
                        <p>
                            {" "}
                            Read more <a href={url}> here </a>
                        </p>
                    </main>
                ) : (
                    <main className='show--error'>
                        <p>Unfortunately, an error occured. Try again later </p>
                        <button onClick={toggleShowErrorMessage}> Care to check the error</button>
                        {showErrorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    </main>
                )}
            </Layout>
        </Fragment>
    );
};

UniqueShow.getInitialProps = async (context) => {
    const { eachshow } = context.query;
    console.log("context is ", context);
    try {
        const apiResponse = await (await fetch(`https://api.tvmaze.com/shows/${eachshow}`)).json();

        return { show: apiResponse, isError: false };
    } catch (error) {
        console.log("Error ", error);
        return { isError: true, errorMessage: error };
    }
};

export default UniqueShow;
