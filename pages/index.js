import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karolub</title>
        <meta
          name="description"
          content="karoclub"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents/>
    </div>
  );
}
