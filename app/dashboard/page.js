"use client";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#3C6E71] text-white flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <nav className="space-y-4 text-center">
                <Link href="/dashboard/penny-pots">
                    <button className="w-48 bg-[#284B63] text-white py-2 px-4 rounded-md hover:bg-[#353535] transition-all">
                        Penny Pots
                    </button>
                </Link>
                <Link href="/dashboard/transactions">
                    <button className="w-48 bg-[#284B63] text-white py-2 px-4 rounded-md hover:bg-[#353535] transition-all">
                        Transactions
                    </button>
                </Link>
                <Link href="/dashboard/reports">
                    <button className="w-48 bg-[#284B63] text-white py-2 px-4 rounded-md hover:bg-[#353535] transition-all">
                        Reports
                    </button>
                </Link>
                <Link href="/dashboard/settings">
                    <button className="w-48 bg-[#284B63] text-white py-2 px-4 rounded-md hover:bg-[#353535] transition-all">
                        Settings
                    </button>
                </Link>
            </nav>
        </div>
    );
}
