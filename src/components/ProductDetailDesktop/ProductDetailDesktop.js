'use client';

import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Rating,
    FormControl,
    Link, InputLabel, Select, MenuItem,
} from '@mui/material';
import { useState } from "react";

export default function ProductDetailDesktop({ producto }) {


    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, m: 4 }}>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <Card>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>

                                <CardMedia
                                    component="img"
                                    image={producto.url_imagen}
                                    alt="Producto"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" component="div">
                                    {producto.nombre_publicacion}
                                </Typography>
                                <Rating name="read-only" value={producto.puntuacion} readOnly />
                                <Typography gutterBottom variant="body2" color="text.secondary">
                                    +{producto.cantidad_vendidos} vendidos
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                                    <Typography variant="body1">
                                        Memoria interna:
                                    </Typography>
                                    <Typography variant="body1">
                                        {producto.memoria_interna} GB
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Typography variant="body1">
                                        Color:
                                    </Typography>
                                    <Typography variant="body1">
                                        {producto.color}
                                    </Typography>
                                </Box>
                                <Typography variant="h3" color="primary">
                                    {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(producto.precio)}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ p: 3, m: 2 }} variant="outlined">
                                    <Typography variant="body2">
                                        Hasta 36 cuotas con tu VISA terminada en 4201
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                        Llega gratis entre el 22/mar y el 1/abr
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        Stock disponible
                                    </Typography>
                                    <FormControl fullWidth>
                                        <InputLabel id="quantity-select-label">Cantidad</InputLabel>
                                        <Select
                                            labelId="quantity-select-label"
                                            id="quantity-select"
                                            value={quantity}
                                            label="Cantidad"
                                            onChange={handleChange}
                                        >
                                            {[...Array(10).keys()].map((number) => (
                                                <MenuItem key={number} value={number + 1}>
                                                    {number + 1}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                                        <Button size="large" variant="contained" fullWidth>
                                            Comprar ahora
                                        </Button>
                                        <Button size="large" variant="outlined" fullWidth sx={{ mt: 1 }}>
                                            Agregar al carrito
                                        </Button>
                                    </Box>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Vendido por {producto.nombre_tienda}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                                            Devolución gratis. Tienes 30 días desde que lo recibes.
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
