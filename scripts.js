const products = [
    {
        code: 'KC8991',
        name: 'HS DS ELASTO',
        quantity: '20 Litre',
        mfg_month: '07/2024',
        price: 'Rs 7879.00',
        price_per_ltr: 'Rs 393.95/Litre',
        scanner_code: 'P+F00KC80991020000T+310/12345/07-2024D+1',
        token_image: 'KC8991',
        address: 'Berger House, 129 Park Street, Kolkata 700017',
        bucket_empty: '(1.060 ±0.03)Kg',
        base_name: '(P1/P2/N1/N2/P0)',
        mesh: '(60# /80# /120# /etc)',
        images: ['bucket.jpg', 'lid.jpg']
    },
    {
        code: 'KC8992',
        name: 'HS DS ELASTO',
        quantity: '20 Litre',
        mfg_month: '07/2024',
        price: 'Rs 7879.00',
        price_per_ltr: 'Rs 393.95/Litre',
        scanner_code: 'P+F00KC80991020000T+310/12345/07-2024D+1',
        token_image: 'KC8991',
        address: 'Berger House, 129 Park Street, Kolkata 700017',
        bucket_empty: '(1.060 ±0.03)Kg',
        base_name: '(P1/P2/N1/N2/P0)',
        mesh: '(60# /80# /120# /etc)',
        images: ['PRO02.jpg', 'lid.jpg']
    },
    {
        code: 'KC8993',
        name: 'HS DS ELASTO',
        quantity: '20 Litre',
        mfg_month: '07/2024',
        price: 'Rs 7879.00',
        price_per_ltr: 'Rs 393.95/Litre',
        scanner_code: 'P+F00KC80991020000T+310/12345/07-2024D+1',
        token_image: 'KC8991',
        address: 'Berger House, 129 Park Street, Kolkata 700017',
        bucket_empty: '(1.060 ±0.03)Kg',
        base_name: '(P1/P2/N1/N2/P0)',
        mesh: '(60# /80# /120# /etc)',
        images: ['bucket.jpg', 'PRO02.jpg']
    }
];

document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.trim().toUpperCase();
    const productInfo = document.getElementById('product-info');

    const product = products.find(p => p.code === query);

    if (product) {
        productInfo.style.display = 'block';
        productInfo.innerHTML = `
            <img src="${product.images[0]}" class="product-image" alt="${product.name}">
            <img src="${product.images[1]}" class="product-image" alt="${product.name}">
            <div class="product-details">
                <p><strong>Product Code:</strong> ${product.code}</p>
                <p><strong>Genric Name:</strong> ${product.name}</p>
                <p><strong>Quantity:</strong> ${product.quantity}</p>
                <p><strong>Mfg Month:</strong> ${product.mfg_month}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Price per Litre:</strong> ${product.price_per_ltr}</p>
                <p><strong>Scanner Code:</strong> ${product.scanner_code}</p>
                <p><strong>Token img:</strong> ${product.token_image}</p>
                <p><strong>Address:</strong> ${product.address}</p>
                <p><strong>Empty Bucket Weight:</strong> ${product.bucket_empty}</p>
                <p><strong>Base Name:</strong> ${product.base_name}</p>
                <p><strong>Mesh:</strong> ${product.mesh}</p>
            </div>
        `;
    } else {
        productInfo.style.display = 'none';
        productInfo.innerHTML = '';
    }
});
