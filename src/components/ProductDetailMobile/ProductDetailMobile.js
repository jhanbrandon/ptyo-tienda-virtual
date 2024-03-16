'use client';

import { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl,
    InputLabel,
    MenuItem,
    Rating,
    Select,
    Typography
} from "@mui/material";

export default function ProductDetailMobile({ producto }) {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <Card>
            <CardMedia
                component="img"
                image={producto.url_imagen}
                alt="Producto"
            />
            <CardContent>
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
                <Typography variant="h5" color="primary">
                    {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(producto.precio)}
                </Typography>
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
            </CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, ml: 2, mr: 2 }}>
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
    );
}
