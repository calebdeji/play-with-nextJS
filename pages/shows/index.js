import React from "react";
import Head from "next/head";
import Layout from "../../component/Layout/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const Show = (props) => {
    const { shows, isError } = props;
    return (
        <>
            <Head>
                <title>Calebdeji | show</title>
            </Head>
            <Layout>
                <h1> Batman Shows </h1>
                {!isError &&
                    shows.map((show) => {
                        const { id, name } = show;
                        return (
                            <li key={id}>
                                <Link href='/shows/[eachshow]' as={`/shows/${id}`}>
                                    <a> {name} </a>
                                </Link>
                            </li>
                        );
                    })}
            </Layout>
        </>
    );
};

Show.getInitialProps = async function () {
    console.log("seen");
    try {
        const res = await (await fetch("https://api.tvmaze.com/search/shows?q=batman")).json();
        console.log(`Show data fetched. Count: ${res.length}`);
        return {
            isError: false,
            shows: res.map((entry) => entry.show),
        };
    } catch (error) {
        console.log("error : ", error);
        return {
            isError: true,
            error,
        };
    }
};

export default Show;
