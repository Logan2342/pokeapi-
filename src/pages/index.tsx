import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log('Search query:', searchQuery);
        // Implement your search logic here
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-row-reverse items-center space-x-reverse space-x-4 border-2 border-neutral-700 p-4">
                <input
                    type="text"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
                    placeholder="Look up"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className="flex flex-row justify-between w-full border-2 border-blue-500 gap-4">

            </div>
        </main>
    );
}