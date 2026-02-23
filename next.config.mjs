/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jgqxjrvjlbksjbqaxgtd.supabase.co', // Reemplaza con tu ID real
        pathname: '/storage/v1/object/public/imgpelis/*', //Reemplaza con el nombre de tu carpeta
      },
    ],
  },
};

export default nextConfig;
