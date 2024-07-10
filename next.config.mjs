/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
            },
            {
                protocol: 'https',
                hostname: 'pokeapi.co',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
