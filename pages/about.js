import React from "react";
import Link from "next/link";
import Layout from "../component/Layout/Layout";
<<<<<<< HEAD
=======
import Head from "next/head";
>>>>>>> blog-app

const About = () => {
    return (
        <Layout>
<<<<<<< HEAD
            <main>
                <p>About seen </p>
                <Link href='/about/subabout'>
                    <a> About subsegment</a>
                </Link>
=======
            <Head>
                <title> Learn Next | About </title>
            </Head>
            <main>
                <p>About seen </p>
>>>>>>> blog-app
            </main>
        </Layout>
    );
};

export default About;
