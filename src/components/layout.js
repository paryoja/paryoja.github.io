import React from "react";
import { Link } from "gatsby";
import { siteMetadata } from "../../gatsby-config";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  let disqusConfig = {
    url: `${siteMetadata.siteUrl + location.pathname}`,
    // identifier: post.id,
    // title: post.title,
  };
  console.log(children);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>
        {children}
        <Disqus config={disqusConfig} />
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
