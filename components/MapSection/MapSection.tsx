import { Box } from "../styled";

export const Mapsection = () => {
  return (
    <Box width={"100%"} bg={"secondary"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36497.68239547568!2d74.7398216428579!3d34.04178950104282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f0688e9fc19%3A0x8ad82fa826bc6c37!2sLegal%20Surface%20Advocates%20%26%20Solicitors%20-%20Advocates%20In%20Srinagar%20%2F%20Lawyers%20In%20Srinagar.!5e0!3m2!1sen!2sin!4v1739097797344!5m2!1sen!2sin"
        width="full"
        height="500"  
        loading="lazy"
      ></iframe>
    </Box>
  );
};
