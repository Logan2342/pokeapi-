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
                {/* First div with an image and a description */}
                <div className="flex flex-col items-center border-2 border-gray-300 p-4 rounded-lg">
                    <Image
                        src="/profile.png" // Replace with your image path
                        width={150}
                        height={150}
                        alt="Profile Picture"
                        className="rounded-full"
                    />
                    <p className="mt-4 text-center">This is a profile picture with  description.</p>
                </div>
                {/* Second div with just a description */}
                <div className="flex flex-col items-center border-2 border-gray-300 p-4 rounded-lg">
                    <p className="text-center">This is a description without an image.</p>
                </div>
            </div>
        </main>
    );
}