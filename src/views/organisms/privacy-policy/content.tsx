import React, { FC } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { color } from '../../../assets/styles';

import { PrivacyPolicyContentImagesQuery } from '../../../types/graphql-types';

type Props = {
  className?: string;
};

const PrivacyPolicyContent: FC<Props> = ({ className = '' }) => {
  const data: PrivacyPolicyContentImagesQuery = useStaticQuery(graphql`
    query PrivacyPolicyContentImages {
      placeholderImage: file(relativePath: { eq: "fairy-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <article className={className}>
      <h1>
        <Img
          className="fairy-icon"
          fluid={data.placeholderImage?.childImageSharp?.fluid ?? []}
        />
        fairy - プライバシーポリシー
      </h1>

      <p>
        第三者に個人を特定できる情報を提供することはありません。
        <br />
        個人情報の管理には最新の注意を払い、以下に掲げた通りに扱います。
      </p>

      <section>
        <h2>サポート</h2>
        <p>
          下記URLのtwitterアカウントへ連絡をお願いいたします。
          <br />
          <a href="https://twitter.com/alternacrow">
            https://twitter.com/alternacrow
          </a>
        </p>
      </section>

      <section>
        <h2>データ解析</h2>
        <p>
          アプリの利便性向上のため、匿名で個人を特定できない範囲で最新の注意を払い、アクセス解析をしております。
          <br />
          例えばアプリのクラッシュ時にどんな原因でクラッシュしたかを匿名で送信して、バグの素早い修正に役立たせております。
        </p>
      </section>

      <section>
        <h2>免責事項</h2>
        <p>
          利用上の不具合・不都合に対して可能な限りサポートを行っておりますが、利用者が本アプリを利用して生じた損害に関して、開発元は責任を負わないものとします。
        </p>
      </section>
    </article>
  );
};

export default styled(PrivacyPolicyContent)`
  padding: 48px 16px 32px;

  section {
    margin-top: 24px;
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: ${color.primary};
    line-height: 1.5;

    .fairy-icon {
      margin-right: 8px;
      border-radius: 4px;
      height: 32px;
      width: 32px;
    }
  }

  h2 {
    font-size: 20px;
    color: ${color.secondary};
    line-height: 1.5;
    padding-bottom: 4px;
    border-bottom: 2px solid ${color.tertiary};
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
  h1 + p {
    margin-top: 16px;
  }
  h2 + p {
    margin-top: 8px;
  }

  a {
    color: ${color.link};
    &:hover {
      color: ${color.linkhover};
    }
  }
`;
