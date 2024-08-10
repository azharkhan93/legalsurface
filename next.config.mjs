/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: { ssr: true } },

  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'], 
  },
// images: {
//   dangerouslyAllowSVG: true,
//   remotePatterns: [{
//     protocol: "https",
//     hostname: "mvp-lit-list-dev.s3.eu-west-2.amazonaws.com" ,
//     port: ""

     
//   }]
// }

};

export default nextConfig;
