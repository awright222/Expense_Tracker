"use client";
import { useState } from "react";

export default function Transactions() {
    const [transactions, setTransactions] = useState([
        { id: 1, name: "Bought Milk", amount: -5, category: "Groceries" },
        { id: 2, name: "Salary", amount: 2000, category: "Income" },
        { id: 3, name: "Movie Ticket", amount: -15, category: "Entertainment" },
    ]);

    return (
        <div className="min-h-screen bg-[#3C6E71] text-white flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-4">Transactions</h1>
            <p className="text-lg text-[#D9D9D9] mb-6">View all your expenses and income.</p>

            <div className="w-full max-w-md">
                <ul className="space-y-4">
                    {transactions.map((tx) => (
                        <li key={tx.id} className="bg-[#284B63] p-4 rounded-md shadow-md">
                            <p className="text-xl font-semibold">{tx.name}</p>
                            <p className={`text-lg ${tx.amount < 0 ? "text-red-400" : "text-green-400"}`}>
                                ${tx.amount}
                            </p>
                            <p className="text-sm text-[#D9D9D9]">Category: {tx.category}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
