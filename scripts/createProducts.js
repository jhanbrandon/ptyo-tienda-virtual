const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const createRandomProduct = (index) => {
    const brands = ['Apple iPhone', 'Samsung Galaxy S'];
    const brand = brands[index % brands.length];
    const models = {
        'Apple iPhone': `iPhone ${10 + (index % 6)} Pro`,
        'Samsung Galaxy S': `Galaxy S${22 + (index % 4)}`,
    };
    const colors = ["Negro", "Blanco", "Oro", "Azul", "Titanio Negro"];
    const memoryOptions = [64, 128, 256, 512];
    const storeNames = Array.from({ length: 10 }, (_, i) => `Tienda ${i + 1}`);

    const model = models[brand];
    const memory = memoryOptions[index % memoryOptions.length];
    const color = colors[index % colors.length];

    const seoSlug = `${brand.replace(/ /g, '-').toLowerCase()}-${model.replace(/ /g, '-').toLowerCase()}-${memory}-gb-${color.toLowerCase()}`.replace(/ /g, '-');

    return {
        nombre_publicacion: `${brand} ${model} (${memory} GB) - ${color}`,
        puntuacion: Math.round(Math.random() * 50) / 10,
        cantidad_vendidos: Math.floor(Math.random() * 10000),
        memoria_interna: memory,
        color: color,
        precio: Math.floor(Math.random() * (70000 - 1000) + 1000) * 1000,
        stock: Math.floor(Math.random() * 100),
        nombre_tienda: storeNames[index % storeNames.length],
        marca: brand === 'Apple iPhone' ? 'Apple' : 'Samsung',
        url_imagen: brand === 'Apple iPhone' ? 'https://http2.mlstatic.com/D_NQ_NP_2X_891263-MLA71783089058_092023-F.webp' : 'https://http2.mlstatic.com/D_NQ_NP_2X_706152-MLA74088396736_012024-F.webp',
        seo_slug: seoSlug,
        identificador: `PUT${String(index + 1).padStart(5, '0')}`,
    };
};

const createProducts = async () => {
    const promises = [];

    for (let i = 0; i < 20; i++) {
        const product = createRandomProduct(i);
        const docRef = db.collection('productos').doc();
        promises.push(docRef.set(product));
    }

    await Promise.all(promises);
    console.log('20 productos han sido creados en Firestore.');
};

createProducts().catch(console.error);
