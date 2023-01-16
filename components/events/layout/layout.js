import { Fragment } from "react";
import MainHeader from "./main-header";
import Head from "next/head";

export default function Layout(props) {
  return (
    <Fragment>
      <Head>
        <title>Next Events App</title>
      </Head>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
