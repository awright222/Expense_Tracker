"use client";

import { useEffect, useState } from "react";
import { supabase } from "../src/lib/supabase";
import Link from "next/link";
import Image from "next/image"; // Import Image component from Next.js

export default function LandingPage() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            const { data, error } = await supabase.from("groups").select("*");

            if (error) {
                console.error("Error fetching groups:", error);
            } else {
                console.log("Fetched groups:", data);
                setGroups(data);
            }
        };

        fetchGroups();
    }, []);

    const addTestGroup = async () => {
        const { data, error } = await supabase.from("groups").insert([{ name: "New Test Group" }]);

        if (error) {
            console.error("Insert Error:", error);
        } else {
            console.log("Inserted:", data);
            setGroups((prevGroups) => [...prevGroups, ...data]);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#3C6E71] to-[#284B63] text-white flex flex-col justify-center items-center text-center p-4 md:p-8">
            {/* Logo and PennyPlanner text */}
            <div className="mb-8">
                <Image src="/logo.png" alt="Logo" width={100} height={100} className="mx-auto" />
                <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF]">PennyPlanner</h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFFFFF]">Welcome to Your Expense Tracker</h2>
            <p className="text-lg md:text-xl mb-8 max-w-md md:max-w-lg text-[#D9D9D9]">
                Keep track of your personal and group expenses in one easy-to-use app. 
                Simplify your finances and always stay on top of your budget!
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <Link href="/login">
                    <button className="bg-[#284B63] text-white py-2 px-4 md:px-6 rounded-md hover:bg-[#3C6E71] transition-all shadow-lg">
                        Log In
                    </button>
                </Link>
                <Link href="/signup">
                    <button className="bg-[#353535] text-white py-2 px-4 md:px-6 rounded-md hover:bg-[#3C6E71] transition-all shadow-lg">
                        Sign Up
                    </button>
                </Link>
            </div>

            <div className="max-w-md md:max-w-4xl space-y-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#FFFFFF]">Features</h2>
                <ul className="space-y-2 text-base md:text-lg text-[#D9D9D9]">
                    <li className="flex items-center">
                        <span className="mr-2">📊</span> Track personal and group expenses.
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">💸</span> Split expenses among friends, family, or colleagues.
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">🔔</span> Stay notified when new expenses are added.
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">📈</span> Visualize your spending trends with charts and insights.
                    </li>
                </ul>
            </div>

            {/* Commenting out this section to hide the groups */}
            {/* 
            <div>
                <h2>Groups</h2>
                <button onClick={addTestGroup}>Add Test Group</button>
                <ul>
                    {groups.length > 0 ? (
                        groups.map((group) => <li key={group.id}>{group.name}</li>)
                    ) : (
                        <p>No groups found.</p>
                    )}
                </ul>
            </div>
            */}
        </div>
    );
}