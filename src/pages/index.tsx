import React from "react";
import Head from "next/head";

import HomeCinema from "../assets/home-cinema.svg";
import Netflix from "../assets/netflix.svg";
import { Container } from "../styles/pages/Home";
import { Middle } from "../styles/pages/Middlehome";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Create Next App</title>
            </Head>

            <HomeCinema width="400px" height="400px"/>
            <h1>Cinema em Casa</h1>

            <p>
                Com a pandemia que o mundo está enfrentando fomos obrigados a nos reenventarmos
                Criando novos ábidos, novos custumes, aprender coisas novas, etc.

                O cinema em casa foi uma dessas opções na adoptados por amantes de filme, pois os cinemas
                tinham sido fechados. Na actualidade existem diversos sistemas de Streaming aondo o que mais
                se destaca é o NETFLIX
            </p>
            <Netflix width="800px" height="400px"/>
        </Container>
    );
};

export default Home;
