// This is next.js so this index file is actaully the homepage of the site! 
// `npm run dev` to launch app on localhost:3000! 

import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';
import Login from "../components/Login";


export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Mysocial</title>
      </Head>

      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user 
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}

