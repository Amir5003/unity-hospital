'use client';

import { useParams } from "react-router-dom";
import { doctors } from "./../../data/doctors";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function DoctorsPage() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return <Typography variant="h6">Doctor not found.</Typography>;
  }

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>
        <Avatar
          alt={doctor.name}
          src={doctor.image}
          sx={{ width: 180, height: 180, borderRadius: 3 }}
        />
        <Box>
          <Typography variant="h4" fontWeight={700}>{doctor.name}</Typography>
          <Typography variant="h6" color="text.secondary">{doctor.specialty}</Typography>
          <Typography variant="subtitle1" mt={1}>{doctor.qualification}</Typography>
          <Typography variant="body2" mt={2} whiteSpace="pre-line">{doctor.description}</Typography>
          <Typography variant="body2" mt={2}>
            📍 {doctor.address}
          </Typography>
          <Typography variant="body2">
            📞 {doctor.contact.join(" / ")}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

