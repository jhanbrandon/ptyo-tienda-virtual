'use server';

import admin from '@/firebase/serverAdmin';

export async function getProductById(id) {
    const db = admin.firestore();
    const productoRef = db.collection('productos').where('identificador', '==', id);
    const producto = await productoRef.get();

    if (producto.empty) {
        return null;
    }

    let data = producto.docs[0].data();
    data.id = producto.docs[0].id;

    return JSON.parse(JSON.stringify(data));
}

export async function getProductsByBrand(brand) {
    const db = admin.firestore();
    const productoRef = db.collection('productos').where('marca', '==', brand);
    const productos = await productoRef.get();

    if (productos.empty) {
        return null;
    }

    return productos.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;
        return JSON.parse(JSON.stringify(data));
    });
}
