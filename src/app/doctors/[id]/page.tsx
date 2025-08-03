'use client';

import { doctors } from "../../../data/doctors";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DoctorsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const doctor = doctors.find((doc) => doc.id === id);

  // Animation state
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      {/* Common Header with Back Button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton onClick={() => router.back()} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" fontWeight={700}>
          Doctor Details
        </Typography>
      </Box>

      {!doctor ? (
        <Typography variant="h6" color="error" sx={{ textAlign: "center", mt: 8 }}>
          Doctor not found.
        </Typography>
      ) : (
        <Slide direction="up" in={show} timeout={600}>
          <Card
            sx={{
              maxWidth: 700,
              mx: "auto",
              boxShadow: 6,
              borderRadius: 4,
              p: { xs: 2, sm: 4 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 4,
              bgcolor: "#f5f7fa",
              transition: "box-shadow 0.3s",
              "&:hover": { boxShadow: 12 },
            }}
          >
            <Avatar
              alt={doctor.name}
              src={doctor.image}
              sx={{
                width: { xs: 160, sm: 200 },
                height: { xs: 220, sm: 300 },
                borderRadius: 3,
                boxShadow: 3,
                mb: { xs: 2, sm: 0 },
              }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={700} color="#1976d2" gutterBottom>
                {doctor.name}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {doctor.specialty}
              </Typography>
              <Typography variant="subtitle1" fontWeight={500} mb={2}>
                {doctor.qualification}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line", fontSize: "1rem", mb: 2 }}
              >
                {doctor.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>📍 Address:</strong> {doctor.address}
              </Typography>
              <Typography variant="body2">
                <strong>📞 Contact:</strong> {doctor.contact.join(" / ")}
              </Typography>
            </CardContent>
          </Card>
        </Slide>
      )}
    </Container>
  );
}