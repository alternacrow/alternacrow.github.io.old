import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

type Props = {
  className?: string;
  filename: string;
};

const Image: FC<Props> = ({ className = '', filename }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 256) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(
        (n: { node: { relativePath: string | string[] } }) => {
          return n.node.relativePath.includes(filename);
        },
      );

      if (!image) return null;

      return (
        <Img className={className} fluid={image.node.childImageSharp.fluid} />
      );
    }}
  />
);

export default Image;
