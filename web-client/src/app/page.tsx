import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <Link href="/properties">Go to Properties Page</Link>
    </div>
  );
}
