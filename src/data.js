import mango1 from "./img/mango1.png";
import mango2 from "./img/mango2.png"
import mango3 from "./img/mango3.png";
import mango4 from "./img/mango4.png";
import mango5 from "./img/mango5.png";

import feature1 from "./img/feature1.png"
import feature2 from "./img/feature2.png"
import feature3 from "./img/feature3.png"
import feature4 from "./img/feature4.png"

export const heroData = [
    {
        id: 1,
        name: "Devgad",
        price: "200",
        imageSrc: mango1,
    },
    // {
    //     id: 2,
    //     name: "Kesar",
    //     price: "250",
    //     imageSrc: mango2,
    // },
    {
        id: 2,
        name: "Ratnagari",
        price: "300",
        imageSrc: mango3,
    },
    {
        id: 3,
        name: "Pawas",
        price: "300",
        imageSrc: mango5,
    },
];

export const featuresData = [
    {
        img: feature1,
        title: 'Fast Delivery',
        desc: 'Delivery within 24 Hrs'
    },
    {
        img: feature2,
        title: 'Safety In Place',
        desc: 'Covid ready services'
    },
    {
        img: feature3,
        title: 'Hand Picked',
        desc: 'A1 quality only'
    },
    {
        img: feature4,
        title: 'Min Purchase',
        desc: 'Min purchase of 3kg'
    }
]

export const productData = [
    {
        title: "Devgad",
        price: "200",
        img: mango1,
        linkTo: "/devgad"
    },

    {
        title: "Ratnagari",
        price: "300",
        img: mango3,
        linkTo: "/ratnagari"
    },
    {
        title: "Pawas",
        price: "300",
        img: mango5,
        linkTo: "/pawas"
    },

]

