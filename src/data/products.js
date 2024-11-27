import mobile from "../assets/mobile.png"
import bag from "../assets/bag.png"
import shoes from "../assets/shoes.png"
import laptop from "../assets/laptop.png"
import sunglasses from "../assets/sunglasses.png"
import camera from "../assets/camera.png"

export const PRODUCTS = [
    {
        id: 1,
        productName: "Mobile",
        price: 1000,
        productImage: mobile,
        availibility: 5,
        offer: "10% off"
    },
    {
        id: 2,
        productName: "Bag",
        price: 1200,
        productImage: bag,
        availibility: 3,
        offer: "Buy 1 Get 1 Free"
    },
    {
        id: 3,
        productName: "Shoes",
        price: 1500,
        productImage: shoes,
        availibility: 2,
        offer: "15% off on orders above $2000"
    },
    {
        id: 4,
        productName: "Laptop",
        price: 1700,
        productImage: laptop,
        availibility: 7,
        offer: "Free Mouse with Purchase"
    },
    {
        id: 5,
        productName: "Sunglasses",
        price: 1850,
        productImage: sunglasses,
        availibility: 4,
        offer: "20% off"
    },
    {
        id: 6,
        productName: "Camera",
        price: 1300,
        productImage: camera,
        availibility: 8,
        offer: null // No offer available
    }
];