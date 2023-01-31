import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Form } from "./Form";

export const LoginPage = () => {
  const theme = useTheme();
  const isnNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width={"100%"}
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign={"center"}
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Socialize
        </Typography>
      </Box>
      <Box
        width={isnNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius={"1.5rem"}
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight={"500"}
          variant="h5"
          sx={{
            mb: "1.5rem",
          }}
        >
          Welcome to Socialize, the social media for programmers!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};
