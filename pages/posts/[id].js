import { useRouter } from "next/router";
import Layout from "../../component/Layout/Layout";
import Head from "next/head";

const Posts = () => {
    const {
        query: { id }
    } = useRouter();
    return (
        <>
            <Head>
                <title> Calebdeji Blog | {id} </title>
            </Head>
            <Layout>
                <h2> This is the blog post</h2>
                <h4>The title of the blog post is {id}</h4>
            </Layout>
        </>
    );
};
export default Posts;
