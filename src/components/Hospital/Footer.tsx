import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Box ref={ref} sx={{ backgroundColor: '#1976d2', color: '#fff', p: 3, textAlign: 'center', mt: 6 }}>
    {/* <Image src="/logo.svg" alt="Unity Hospital Purnea Logo" width={48} height={48} style={{ marginBottom: 8 }} /> */}
    <Typography variant="body2">© 2025 Unity Hospital Purnea. All rights reserved.</Typography>
  </Box>
));

Footer.displayName = 'Footer';
export default Footer;
