import NextLink from 'next/link'
import { Button, Link } from '@chakra-ui/react'
import { redirect } from 'next/navigation'

function RedirectPage() {
  return <div>Redirecting...</div>;
}

export async function getServerSideProps(context: any) {
  context.res.writeHead(302, { Location: '/app' });
  context.res.end();
  return { props: {} };
}

export default RedirectPage;
