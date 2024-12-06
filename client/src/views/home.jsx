/* Top-Level Imports */
import { Helmet } from "react-helmet-async";
import "./css/home.css";

/* Component Imports */
import Navigation from "../components/Navigation";
// import Message from "../components/Message";

function Home()
{
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navigation />

            <main>
                <section className="container">
                </section>
            </main>

            <footer>

            </footer>
        </>
    );
};

export default Home;