import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ margin: '50px auto', textAlign: 'center' }}>
      <Link href="/palmistry" style={{ color: '#00f', textDecoration: 'underline' }}>Palmistry</Link>
    </div>
  );
}
