import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import Image from "next/image";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

const Home = ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | ms.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>

          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.svg" width={450} height={450} alt="Avatar" />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const price = await stripe.prices.retrieve("price_1K2neiB78zSIlFxPQhUob0wr", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount! / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
