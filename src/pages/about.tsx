import Link from 'next/link';
import Layout from 'components/Layout';
import { styled } from '@compiled/react';

const H1 = styled.h1`
  font-weight: bold;
`;

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <H1>About</H1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);
export default AboutPage;
