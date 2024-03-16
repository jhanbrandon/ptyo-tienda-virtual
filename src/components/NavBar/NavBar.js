import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Search from "@/components/Search";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from 'next/link';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Image
                            src="/logo tienda.svg"
                            alt="Tienda Putumayo"
                            width={50}
                            height={50}
                            priority
                        />
                        <Typography variant="h6" component="h1" sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
                            Tienda Putumayo
                        </Typography>
                    </Box>
                    <Search />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
