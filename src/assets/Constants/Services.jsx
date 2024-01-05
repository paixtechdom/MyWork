import img1 from '../img/products/1.jpg'
import img2 from '../img/products/2.jpg'
import img3 from '../img/products/15.jpg'
import img4 from '../img/products/16.jpg'
import img5 from '../img/products/3.jpg'
import img6 from '../img/products/4.jpg'
import img7 from '../img/products/13.jpg'
import img8 from '../img/products/14.jpg'
import img9 from '../img/products/14.jpg'
import img10 from '../img/products/13.jpg'
import img11 from '../img/products/17.jpg'
import img12 from '../img/products/18.jpg'
import img13 from '../img/products/11.jpg'
import img14 from '../img/products/12.jpg'
import img15 from '../img/products/22.jpg'
import img16 from '../img/products/23.jpg'
import img17 from '../img/products/24.jpg'
import img18 from '../img/products/25.jpg'


const Services = [
    {
        productId: 1,
        img: img10,
        name: 'Educational Consultant',
        isNew: true,
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: ['Technology', 'Cars'],
        subcategory: 'Toyota',
        type: 'normal',
        store: 'Babatunde Elizabeth',
        productOwnerKey: 'abc',
        rating: 2,
        
    },
    {
        productId: 7,
        img: img12,
        name: 'Music Artist',
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: ['house', 'building'],
        subcategory: 'Interior Dec',
        type: 'trending',
        store: 'Fujicologist',
        rating: 4,
        productOwnerKey: 'abd'
    },
    {
        productId: 2,
        img: img13,
        name: 'Farmer',
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: ['house', 'building'],
        subcategory: 'Interior Dec',
        type: 'trending',
        store: 'Kings Store',
        rating: 5,
        productOwnerKey: 'abd'
    },
    {
        productId: 14,
        img: img4,
        name: 'Developer',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        store: 'Confo Paul',
        type: '',
        rating: 0,
        productOwnerKey: 'abc'
    },
    {
        productId: 8,
        img: img5,
        name: 'UI/UX Designer',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        store: 'Align Des',
        type: '',
        rating: 3,
        productOwnerKey: 'abc'
    },
    {
        productId: 4,
        img: img6,
        name: 'Web Developer',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        store: 'Confo Paul',
        type: '',
        rating: 4,
        productOwnerKey: 'abc'
    },
    {
        productId: 3,
        img: img7,
        name: 'Driver',
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        type: '',
        store: 'Pa James',
        rating: 2,
        productOwnerKey: 'abc'
    },
    {
        productId: 9,
        img: img8,
        name: 'Cobbler',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        type: '',
        rating: 3,
        productOwnerKey: 'abc'
    },
    {
        productId: 2,
        img: img9,
        name: 'Farmers',
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: ['house', 'building'],
        subcategory: 'Interior Dec',
        type: 'trending',
        store: 'Kings Store',
        rating: 3,
        productOwnerKey: 'abd'
    },
  
]

/*  
    sector: fashion, food, tech
    category: clothes, services, skirts, pants
    subcategory: 
    type: normal, featured, trending
    gender
*/


const ServicesCategories = [
    {
        name: 'Agric',
        description: '',
        img: '/img/services/4.jpg',
    },
    {
        name: 'Education',
        description: '',
        img: '/img/services/1.jpg',
    },
    {
        name: 'Business',
        description: '',
        img: '/img/services/4.jpg',
    },
    {
        name: 'Labour',
        description: '',
        img: '/img/services/11.jpg',
    },
    {
        name: 'Engineers',
        description: '',
        img: '/img/services/7.jpg',
    },
    {
        name: 'Marketers',
        description: '',
        img: '/img/services/1.jpg',
    },
    {
        name: 'Developers',
        description: '',
        img: '/img/services/5.jpg',
    },
    {
        name: 'Artists',
        description: '',
        img: '/img/services/11.jpg',
    },
   
]

const subCategories = [
    {
        title: ''
    }
]

export { Services, ServicesCategories }

