/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['www.jomalone.co.uk', 'pastlenomad.github.io']
    },
    async rewrites(){
        return[
            {source: '/api/:path',
        destination: 'http://localhost:3001/:path'}
        ]
    }
}

module.exports = nextConfig
