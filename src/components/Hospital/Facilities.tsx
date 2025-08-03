import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import React from 'react';

const Facilities = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Container ref={ref} sx={{ my: 6, scrollMarginTop: "80px"  }}>
    <Typography variant="h4" fontWeight={700} gutterBottom>Facilities</Typography>
    <Grid container spacing={3}>
      {[
        { title: 'Here we can have ot image or something similar', img: '/facility1.jpg' },
        { title: 'Comfortable Patient Rooms or something similar more images we can add', img: '/facility3.jpg' },
      ].map((fac) => (
        <Grid key={fac.title} >
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardMedia>
              <Image src={fac.img} alt={fac.title} width={400} height={160} style={{ objectFit: 'cover', width: '100%' }} />
            </CardMedia>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>{fac.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
));

Facilities.displayName = 'Facilities';
export default Facilities;
