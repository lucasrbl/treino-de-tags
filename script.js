window.dataLayer.push({
    'products': [{
         'sku': 'DD44',
         'name': 'T-Shirt',
         'currency': 'BRL',
         'category': 'Apparel',
         'price': 11.99,
         'quantity': 1
    }, {
         'sku': 'AA1243544',
         'name': 'Socks',
         'currency': 'BRL',
         'category': 'Apparel',
         'price': 9.99,
         'quantity': 2
    },
    {
        'sku': 'A23BC',
        'name': 'Best Shirt Ever',
        'currency': 'BRL',
        'category': 'Apparel',
        'price': 400,
        'quantity': 1
    }
]

})


const btn = document.getElementById('form-btn')

btn.addEventListener('click', () => {
    window.location = 'https://lucasrbl.github.io/treino-de-tags/'
})