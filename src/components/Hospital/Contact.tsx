import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Container ref={ref} sx={{ my: 6, scrollMarginTop: "80px" }}>
    <Typography
      variant="h4"
      fontWeight={700}
      gutterBottom
      sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
    >
      Contact & Location
    </Typography>
    <Grid container spacing={3}>
      <Grid >
        <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <LocationOnIcon
              sx={{ verticalAlign: "middle", color: "#1976d2", mr: 1 }}
            />
            Unity Hospital Purnea, Bihar Talkies Road, Line Bazar, Purnea, Bihar
            854302
          </Typography>
          <Typography variant="body1">Phone: 9631014684</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Email: unityhospitalpurnea@gmail.com
          </Typography>
          <Box
            sx={{
              height: 200,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#e3e3e3",
              borderRadius: 2,
              gap: 1,
              p: 1,
            }}
          >
            <iframe
              title="Unity Hospital Location"
              width="100%"
              height="140"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d87.4903104!3d25.7869617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff9007af22cbd%3A0x5ffe12c0b2f9a566!2sUNITY%20Hospital%2C%20Orthopaedics%20%26%20Obs%20Gynae%20Center!5e0!3m2!1sen!2sin!4vXXXXXXXXXXXXXX!5m2!1sen!2sin"
            />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=25.7869617,87.4928853"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                component="button"
                sx={{
                  mt: 1,
                  px: 2,
                  py: 1,
                  bgcolor: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 1,
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#1565c0" },
                }}
              >
                Open in Maps & Get Directions
              </Box>
            </a>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Container>
));

Contact.displayName = "Contact";
export default Contact;
