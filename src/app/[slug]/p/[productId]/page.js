'use server';

import { isMobileDevice } from "@/util/deviceDetect";
import ProductDetailMobile from "@/components/ProductDetailMobile";
import ProductDetailDesktop from "@/components/ProductDetailDesktop";
import {getProductById} from "@/service/product";
import {notFound, redirect} from "next/navigation";

export default async function Product({ params }) {
    const isMobile = await isMobileDevice();
    const product = await getProductById(params.productId);

    if(!product) {
        notFound();
    }

    if(product.seo_slug !== params.slug) {
        redirect(`/${product.seo_slug}/p/${params.productId}`)
    }

    if(isMobile) {
        return <ProductDetailMobile producto={product} />;
    }

    return <ProductDetailDesktop producto={product} />;
}
