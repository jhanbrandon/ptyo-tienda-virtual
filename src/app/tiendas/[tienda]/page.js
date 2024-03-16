import { getProductsByBrand } from "@/service/product";
import { notFound } from "next/navigation";
import {Grid, List, Typography} from "@mui/material";
import ProductItem from "@/components/ProductItem";

export default async function Tienda({ params }) {

  const productos = await getProductsByBrand(params.tienda);

  if (!productos) {
    notFound();
  }

  return (
      <Grid container sx={{ p: 3 }}>
        <Grid item xs={12} sm={4}>
            <Typography variant="h3">
                {params.tienda}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
            <List>
                {productos.map(producto => (
                    <ProductItem key={producto.id} product={producto} />
                ))}
            </List>
        </Grid>
      </Grid>
  );
}
