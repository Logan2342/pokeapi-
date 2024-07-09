import Image from "next/image";
import {useState} from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log('Search query:', searchQuery);
        // Implement your search logic here
    };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center space-x-4">
        <input
            type="text"
            className= "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2-brown-500"
            placeholder="Look up"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
          <button
              className="px-4 py-2 text-gray-500 border-gray-100 rounded-lg hover: bg-amber-50 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              onClick={handleSearch}
              >
              search
          </button>
      </div>
    </main>
  );
}
