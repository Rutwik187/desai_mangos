import mango1 from "./img/mango1.png";
import mango2 from "./img/mango2.png"
import mango3 from "./img/mango3.png";
import mango4 from "./img/mango4.png";
import mango5 from "./img/mango5.png";

import feature1 from "./img/feature1.png"
import feature2 from "./img/feature2.png"
import feature3 from "./img/feature3.png"
import feature4 from "./img/feature4.png"

import appricationLetter1 from "./img/appricationLetter1.jpeg"
import appricationLetter2 from "./img/appricationLetter2.jpeg"
import appricationLetter3 from "./img/appricationLetter3.jpeg"
import appricationLetter4 from "./img/appricationLetter4.jpeg"
import appricationLetter5 from "./img/appricationLetter5.jpeg"

import celeb1 from "./img/devendra.jpeg"
import celeb2 from "./img/someone.jpeg"
import celeb3 from "./img/someone2.jpeg"
import celeb4 from "./img/chandrakant-patil.jpeg"

import socialWork1 from "./img/socialWork1.jpg"

import socialWork2 from "./img/socialWork2.jpeg"
import socialWork3 from "./img/socialWork3.jpeg"
import socialWork4 from "./img/socialWork4.jpeg"
import socialWork5 from "./img/socialWork5.jpeg"

import since from "./img/since.svg"

export const heroData = [
    {
        id: 1,
        name: "Devgad",
        price: "200",
        imageSrc: mango1,
    },
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

export const galleryImages = [
    { id: 1, url: appricationLetter4, alt: "Image 1", desc: "Application Letter from Inira Gandhi Former Prime Minister Of India" },
    { id: 2, url: appricationLetter2, alt: "Image 2", desc: "Letter from Amitabh Bachchan" },
    { id: 3, url: appricationLetter3, alt: "Image 3", desc: "Letter from Nitin Gadkari, Road and Transport Department Of India" },
    { id: 4, url: appricationLetter1, alt: "Image 1", desc: "Letter from Chief Minister Of Maharashtra" },
    { id: 5, url: appricationLetter5, alt: "Image 3", desc: "Certificate from All India Mango Show" },
];

export const celebs = [
    { img: celeb1 },
    { img: celeb2 },
    { img: celeb3 },
    { img: celeb4 }
]

export const socialWork = [
    { img: socialWork1 },
    { img: socialWork2 },
    { img: socialWork3 },
    { img: socialWork4 },
    { img: socialWork5 }

]

export const whyChooseUs = [
    {
        img: since
    }
]