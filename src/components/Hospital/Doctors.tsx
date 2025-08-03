import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import React from "react";
import { Box } from "@mui/material";
import { doctors } from "../../data/doctors";


const Doctors = React.forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/doctors/${id}`);
  };

  return (
    <Container ref={ref} sx={{ my: 6, scrollMarginTop: "80px" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
      >
        Our Doctors
      </Typography>
      <Grid container spacing={3}>
        {doctors.map((doc) => (
          <Grid  key={doc.name}>
            <Box sx={{ cursor: "pointer" }} onClick={()=>handleCardClick(doc.id)}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: 2,
                  px: { xs: 2, sm: 0 },
                  width: { xs: 220, sm: 220, md: 260 },
                  mx: "auto",
                }}
              >
                <CardMedia>
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={180}
                    height={180}
                    style={{
                      borderRadius: "50%",
                      margin: "24px auto 0",
                      objectFit: "contain",
                      background: "#e3e3e3",
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    {doc.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doc.specialty}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

Doctors.displayName = "Doctors";
export default Doctors;
