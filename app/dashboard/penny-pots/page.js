"use client";
import { useState } from "react";
import Link from "next/link";

export default function PennyPots() {
    const [pots, setPots] = useState([
        { id: 1, name: "Groceries", total: 250 },
        { id: 2, name: "Entertainment", total: 100 },
    ]);

    const [newPotName, setNewPotName] = useState("");

    const addPennyPot = () => {
        if (!newPotName.trim()) return;

        const newPot = {
            id: Date.now(), // Ensure unique ID
            name: newPotName,
            total: 0,
        };

        setPots([...pots, newPot]);
        setNewPotName(""); // Clear input after adding
    };

    return (
        <div className="min-h-screen bg-[#3C6E71] text-white flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-4">Penny Pots</h1>
            <p className="text-lg text-[#D9D9D9] mb-6">
                Organize your spending by category.
            </p>

            {/* List of Penny Pots */}
            <div className="w-full max-w-md">
                {pots.length > 0 ? (
                    <ul className="space-y-4">
                        {pots.map((pot) => (
                            <li key={pot.id} className="bg-[#284B63] p-4 rounded-md shadow-md hover:bg-[#3C6E71] transition-all cursor-pointer">
                                <Link href={`/dashboard/penny-pots/${pot.id}`} className="block">
                                    <p className="text-xl font-semibold">{pot.name}</p>
                                    <p className="text-sm text-[#D9D9D9]">Total Spent: ${pot.total}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-[#D9D9D9]">No Penny Pots yet.</p>
                )}
            </div>

            {/* Add a new Penny Pot */}
            <div className="mt-6 flex space-x-2">
                <input
                    type="text"
                    value={newPotName}
                    onChange={(e) => setNewPotName(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addPennyPot()}
                    placeholder="New Penny Pot Name"
                    className="p-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3C6E71]"
                />
                <button
                    onClick={addPennyPot}
                    disabled={!newPotName.trim()}
                    className={`px-4 py-2 rounded-md transition-all ${
                        newPotName.trim() ? "bg-[#353535] hover:bg-[#284B63]" : "bg-gray-500 cursor-not-allowed"
                    }`}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
