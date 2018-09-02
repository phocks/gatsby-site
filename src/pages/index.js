import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Hello world!</h1>
    <p>This is a website.</p>
    <p>Now we want to do something else.</p>
    <Link to="/page/2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
