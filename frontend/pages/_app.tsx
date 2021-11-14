import { Fragment } from "react";
import type { AppProps } from "next/app";
import { Role } from "@model";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div>{Role.USER}</div>
    </Fragment>
  );
}
