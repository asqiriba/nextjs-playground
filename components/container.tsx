import Navigation from "./navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <div>
      <Head>
        {/* Theme gotten from BootswatchCDN */}
        <title>My First NextJS</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/superhero/bootstrap.min.css"
        />
      </Head>

      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
