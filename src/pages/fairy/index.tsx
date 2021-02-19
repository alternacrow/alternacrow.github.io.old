import React, { FC } from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../../views/organisms/layouts/layout';
import SEO from '../../views/organisms/layouts/seo';

const FairyPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="fairy" />
    <p>工事中…</p>
    <Link to="/fairy/privacypolicy">プライバシーポリシー</Link>
  </Layout>
);

export default FairyPage;
