import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

const About = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Container ref={ref} sx={{ my: 6,scrollMarginTop: "80px"  }}>
    <Typography
      variant="h4"
      fontWeight={700}
      gutterBottom
      sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
    >
      About Us
    </Typography>
    <Typography variant="body1" sx={{ maxWidth: 700 }}>
      Unity Hospital Purnea is committed to providing high-quality, compassionate care
      to our community. Our mission is to improve the health and well-being of
      our patients through innovative medical practices and dedicated teams of
      professionals. We strive to make healthcare convenient where everyone has
      access to exceptional healthcare services.
    </Typography>
  </Container>
));

About.displayName = "About";
export default About;
