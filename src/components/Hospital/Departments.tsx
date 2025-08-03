import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import React from "react";

const Departments = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Container ref={ref} sx={{ my: 6 , scrollMarginTop: "80px" }}>
    <Typography
      variant="h4"
      fontWeight={700}
      gutterBottom
      sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
    >
      Departments & Services
    </Typography>
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
      {["Orthopedics", "Gynecology", "Obstetrics"].map((dep) => (
        <Chip
          key={dep}
          label={dep}
          color="primary"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      ))}
    </Box>
  </Container>
));

Departments.displayName = "Departments";
export default Departments;
