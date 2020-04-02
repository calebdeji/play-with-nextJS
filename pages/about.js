import React from "react";
import Link from "next/link";
import Layout from "../component/Layout/Layout";

const About = () => {
    return (
        <Layout>
            <main>
                <p>About seen </p>
                <Link href='/about/subabout'>
                    <a> About subsegment</a>
                </Link>
            </main>
        </Layout>
    );
};

export default About;
