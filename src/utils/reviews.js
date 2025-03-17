import Person1Img from './images/person1-img.jpg';
import Person2Img from './images/person2-img.jpg';
import Person3Img from './images/person3-img.jpg';
import Person4Img from './images/person4-img.jpg';

const reviews = [
    {
        id: 1,
        description: 'The koshari was absolutely delicious! The flavors were perfectly balanced, and the crispy onions added the perfect crunch.',
        img: [Person1Img],
        name: 'Omar Hassan',
        initialMotion: '-300px'
    },
    {
        id: 2,
        description: 'I had the best hawawshi here! Juicy, well-spiced, and full of authentic Egyptian flavors. Highly recommended!',
        img: [Person2Img],
        name: 'Layla Ahmed',
        initialMotion: '350px'
    },
    {
        id: 3,
        description: 'The feteer was so buttery and flaky, just like in Egypt! Loved the mix of cheese and honey. Will definitely come back.',
        img: [Person3Img],
        name: 'Mariam Khaled',
        initialMotion: '-300px'
    },
    {
        id: 4,
        description: 'A fantastic experience! The ful medames had the perfect blend of spices, and the baladi bread was fresh and warm.',
        img: [Person4Img],
        name: 'Youssef Nabil',
        initialMotion: '350px'
    }
];

export default reviews;