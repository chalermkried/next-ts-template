import Link from 'next/link';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about" prefetch={false}>
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
