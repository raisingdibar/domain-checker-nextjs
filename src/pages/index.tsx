// pages/index.tsx
import Head from 'next/head';
import DomainChecker from '../components/DomainChecker';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Domain Availability Checker</title>
        <meta name="description" content="Check the availability of domain names" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <DomainChecker />
      </main>
    </div>
  );
};

export default Home;
