import { Box, Typography, Button, Stack, Container } from '@mui/material';

import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
        <Container maxWidth="lg">
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Putumayo Virtual, el mejor lugar para comprar
                </Typography>
            </Box>

            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Ver productos disponibles
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                        <Button component={Link} href="/tiendas/Samsung" variant="contained" sx={{ width: '100%', height: '100px', typography: 'h6', backgroundColor: '#E0E0E0', '&:hover': { backgroundColor: '#AEAEAE' }, borderRadius: 0 }}>
                            Compra Samsung
                        </Button>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Button component={Link} href="/tiendas/Apple" variant="contained" sx={{ width: '100%', height: '100px', typography: 'h6', backgroundColor: '#E0E0E0', '&:hover': { backgroundColor: '#AEAEAE' }, borderRadius: 0 }}>
                            Compra Apple
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Container>
    </main>
  );
}
