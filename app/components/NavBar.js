import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-[#353535] text-white p-4 flex justify-around">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/penny-pots">Penny Pots</Link>
      <Link href="/dashboard/transactions">Transactions</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </nav>
  );
}
