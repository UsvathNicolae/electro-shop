const SEED_PRODUCTS = [
    {
        productName: "Iphone 13",
        title: "Iphone 13",
        price: 5999,
        description: "Best iphone",
        quantity: 24,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        productName: "Iphone 12",
        title: "Iphone 12",
        price: 4999,
        description: "Best iphone",
        quantity: 14,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        productName: "Iphone 11",
        title: "Iphone 11",
        price: 3999,
        description: "Best iphone",
        quantity: 265,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

const SEED_USERS = [
    {
        username: "Mircea",
        password: 'parola',
        productIds: "1,2",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Marcus",
        password: 'parola12',
        productIds: "1,3",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: "Varodi",
        password: 'parola12',
        productIds: "3",
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

module.exports = { SEED_PRODUCTS, SEED_USERS }