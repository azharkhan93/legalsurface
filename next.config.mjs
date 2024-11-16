/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: { ssr: true } },
  

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // port: "",  
        // pathname: "/**",  
      },
    ],
    // domains: ['res.cloudinary.com'],
  },
// images: {
//   dangerouslyAllowSVG: true,
//   remotePatterns: [{
//     protocol: "https",
//     hostname: "mvp-lit-list-dev.s3.eu-west-2.amazonaws.com" ,
//     port: ""

};

export default nextConfig;
