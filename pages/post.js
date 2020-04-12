import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../component/Layout/Layout";

const Post = (props) => {
    const router = useRouter();
    const {
        query: { title },
    } = router;
    return (
        <>
            <Head>
                <title> Calebdeji Blog | {title} </title>
            </Head>
            <Layout>
                <h2> This is the blog post</h2>
            </Layout>
        </>
    );
};
export default Post;
