/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: { ssr: true } },
images: {
  dangerouslyAllowSVG: true,
  remotePatterns: [{
    protocol: "https",
    hostname: "mvp-lit-list-dev.s3.eu-west-2.amazonaws.com" ,
    port: ""

     
  }]
}

};

export default nextConfig;
