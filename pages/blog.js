import React, { useState } from "react";

import Layout from "../component/Layout/Layout";
import Link from "next/link";
import Head from "next/head";
import "../component/styles/blog.scss";

const Blog = () => {
    return (
        <>
            <Head>
                <title> Calebdeji Blog </title>
            </Head>
            <Layout>
                <h1> Calebdeji's Blog </h1>
                <BlogLink />
            </Layout>
        </>
    );
};

const BlogLink = props => {
    const [links, setLinks] = useState([
        { id: 1, title: "Learnign Next", link: "learn-next-js" },
        { id: 2, title: "Testing environment for Next", link: "test--environment-next" }
    ]);
    return (
        <nav className='blog__nav'>
            {links.map(blogLink => {
                const { id, title, link } = blogLink;
                return (
                    <li className='blog__nav__link' key={id}>
                        <Link href={`/posts/[id]`} as={`/posts/${link}`} key={id}>
                            <a className='blog__nav__link'> {title} </a>
                        </Link>
                    </li>
                );
            })}
        </nav>
    );
};
export default Blog;
