import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const doctorsList = [
  { label: "Dr. Asad Akram", value: "asad-akram" },
  { label: "Dr. Aashia Rumman", value: "aashia-rumman" },
];


const Hero = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    mobile: "",
    doctor: "",
    symptoms: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp message
    const message = `Appointment Request:\nName: ${form.name}\nAge: ${form.age}\nAddress: ${form.address}\nMobile: ${form.mobile}\nDoctor: ${form.doctor}\nSymptoms: ${form.symptoms}`;

    // const mailto = `mailto:unityhospitalpurnea@gmail.com?subject=Appointment Request&body=${encodeURIComponent(message)}`;

    // window.open(mailto, "_blank");

    setOpen(false);
    setSuccess(true);
    setForm({
      name: "",
      age: "",
      address: "",
      mobile: "",
      doctor: "",
      symptoms: "",
    });
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        width: "100%",
        height: 340,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 4,
        overflow: "hidden",
        scrollMarginTop: "80px",
      }}
    >
      <Image
        src="/UnitiLogoImage.png"
        alt="Hospital Building"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          width: "100%",
          textAlign: "center",
          color: "#fff",
          left: 0,
          bottom: 10,
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            color: "#1976d2",
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Your health, our priority. Book an appointment with our expert doctors.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#fff",
            color: "#1976d2",
            fontWeight: 700,
            "&:hover": { bgcolor: "#e3e3e3" },
          }}
          onClick={() => setOpen(true)}
        >
          Book an Appointment
        </Button>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            p: 4,
            borderRadius: 3,
            boxShadow: 6,
            minWidth: 320,
            maxWidth: 400,
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={2}>
            Book an Appointment
          </Typography>
          <TextField
            label="Patient Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Age"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            fullWidth
            type="number"
          />
          <TextField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Mobile Number"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            fullWidth
            type="tel"
          />
          <TextField
            select
            label="Doctor"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            required
            fullWidth
          >
            {doctorsList.map((doc) => (
              <MenuItem key={doc.value} value={doc.label}>
                {doc.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Symptoms / Reason for Consultation"
            name="symptoms"
            value={form.symptoms}
            onChange={handleChange}
            required
            fullWidth
            multiline
            minRows={2}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 700 }}>
            Submit
          </Button>
        </Box>
      </Modal>
      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <MuiAlert elevation={6} variant="filled" severity="success" sx={{ width: "100%" }}>
          Appointment request sent successfully!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
});

Hero.displayName = "Hero";
export default Hero;