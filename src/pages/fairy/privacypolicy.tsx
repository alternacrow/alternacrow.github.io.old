import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import Layout from '../../views/organisms/layouts/layout';
import SEO from '../../views/organisms/layouts/seo';
import Content from '../../views/organisms/privacy-policy/content';

const FairyPrivacyPolicyPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="fairy | プライバシーポリシー" />
    <Content />
  </Layout>
);

export default FairyPrivacyPolicyPage;
