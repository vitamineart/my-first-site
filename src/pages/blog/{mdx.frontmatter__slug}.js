import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

function BlogPost({ data, children }) {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
