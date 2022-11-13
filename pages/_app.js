import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Application;
