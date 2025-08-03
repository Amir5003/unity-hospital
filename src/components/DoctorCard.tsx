import { Card, CardContent, Typography, Avatar, CardHeader } from '@mui/material';

export default function DoctorCard({ doctor }: { doctor: any }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={doctor.image} alt={doctor.name} />}
        title={doctor.name}
        subheader={doctor.specialty}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {doctor.experience} years of experience
        </Typography>
      </CardContent>
    </Card>
  );
}
