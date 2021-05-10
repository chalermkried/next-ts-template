import Link from 'next/link';
import Layout from 'components/Layout';
import { styled } from '@compiled/react';

const H1 = styled.h1`
  font-weight: bold;
`;

const IndexPage = () => (
  <Layout>
    <H1>Hello Next.js 👋</H1>
    <p>
      <Link href="/about" prefetch={false}>
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
