import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            MyGebeya
          </Typography>
          <div>
            MyGebeya is a comprehensive online clothes shopping platform that
            provides customers with a convenient and personalized shopping
            experience. With a user-friendly website, customers can easily
            browse through a vast collection of clothing items, from casual wear
            to formal attire, all handpicked to suit a range of styles and
            preferences. Whether you're looking for the latest fashion trends or
            just looking to update your wardrobe, MyGebeya is perfect for you.
            {/* MyGebeya offers a hassle-free
            way to purchase your favorite clothing items from the comfort of
            your own home. With secure payment options, fast delivery, and a
            dedicated customer support team, MyGebeya is the ultimate
            destination for all your clothes shopping needs. */}
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            <b> Address:</b> 06 / 04 Kebena 1148, Addis Ababa, Ethiopia
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            <b> Email:</b> ateyob@gmail.com
          </Typography>
          <Typography mb="30px">
            <b>Phone: </b>(222)333-4444
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
