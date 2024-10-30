import { Flower } from '../types/Types';

import firstImage from '../images/flowers-1.jpg';
import secondImage from '../images/flowers-2.jpg';
import thirdImage from '../images/flowers-3.jpg';
import fourthImage from '../images/flowers-4.jpg';
import fifthImage from '../images/flowers-5.jpg';
import sixthImage from '../images/flowers-6.jpg';
import seventhImage from '../images/flowers-7.jpg';
import eighthImage from '../images/flowers-8.jpg';
import ninthImage from '../images/flowers-9.jpg';
import tenthImage from '../images/flowers-10.jpg';

export const fetchedFlowers: Flower[] = [
    {
        id: 1,
        name: 'Rose',
        price: 19,
        image: firstImage,
        description: 'A beautiful and perfect red rose.',
    },
    {
        id: 2,
        name: 'Tulip',
        price: 25,
        image: secondImage,
        description: 'Colorful tulips that brighten.',
    },
    {
        id: 3,
        name: 'Lily',
        price: 8,
        image: thirdImage,
        description: 'Elegant with a sweet fragrance.',
    },
    {
        id: 4,
        name: 'Flower Bouquet',
        price: 14,
        image: fourthImage,
        description: 'A mixed bouquet for any occasion.',
    },
    {
        id: 5,
        name: 'Carnation',
        price: 33,
        image: fifthImage,
        description: 'Classic carnations with a long-lasting bloom.',
    },
    {
        id: 6,
        name: 'Flower Basket',
        price: 20,
        image: sixthImage,
        description: 'A stunning arrangement of various flowers in a basket.',
    },
    {
        id: 7,
        name: 'Daisy',
        price: 9,
        image: seventhImage,
        description: 'Bright and cheerful daisies for a sunny touch.',
    },
    {
        id: 8,
        name: 'Candle',
        price: 16,
        image: eighthImage,
        description: 'A lovely decorative candle that adds warmth.',
    },
    {
        id: 9,
        name: 'Tulip',
        price: 22,
        image: ninthImage,
        description: 'Fresh tulips available in various colors.',
    },
    {
        id: 10,
        name: 'Flower',
        price: 10,
        image: tenthImage,
        description: 'A generic flower option for all occasions.',
    },
];
