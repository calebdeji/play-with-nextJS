import Head from "next/head";
import Header from "../component/Header/Header";
import Layout from "../component/Layout/Layout";

const Home = () => {
    return (
        <>
            <Head>
                <title>Learn Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout></Layout>
        </>
    );
};

export default Home;
