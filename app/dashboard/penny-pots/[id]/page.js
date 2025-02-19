"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PennyPotDetails() {
    const { id } = useParams(); // Get the Penny Pot ID from the URL
    const [pot, setPot] = useState(null);

    // Dummy data (replace with database query later)
    const pots = [
        { id: 1, name: "Groceries", total: 250, transactions: ["Bought milk - $5", "Dinner - $20"] },
        { id: 2, name: "Entertainment", total: 100, transactions: ["Movie Ticket - $15"] },
    ];

    useEffect(() => {
        const selectedPot = pots.find((p) => p.id === Number(id));
        if (selectedPot) {
            setPot(selectedPot);
        }
    }, [id]);

    if (!pot) {
        return <p className="text-white">Penny Pot not found.</p>;
    }

    return (
        <div className="min-h-screen bg-[#3C6E71] text-white flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-4">{pot.name}</h1>
            <p className="text-lg text-[#D9D9D9] mb-6">Total Spent: ${pot.total}</p>

            <h2 className="text-2xl font-semibold mb-2">Transactions</h2>
            <ul className="space-y-2">
                {pot.transactions.length > 0 ? (
                    pot.transactions.map((tx, index) => (
                        <li key={index} className="bg-[#284B63] p-2 rounded-md shadow-md">
                            {tx}
                        </li>
                    ))
                ) : (
                    <p className="text-[#D9D9D9]">No transactions yet.</p>
                )}
            </ul>

            <Link href="/dashboard/penny-pots">
                <button className="mt-6 bg-[#353535] px-4 py-2 rounded-md hover:bg-[#284B63] transition-all">
                    Back to Penny Pots
                </button>
            </Link>
        </div>
    );
}
