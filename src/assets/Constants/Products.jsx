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

const Products = [
    {
        productId: 1,
        img: img1,
        img2: img2,
        name: 'Toyota Camry',
        isNew: true,
        price: 120,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: ['Technology', 'Cars'],
        subcategory: 'Toyota',
        type: 'normal',
        store: 'Precious Store',
        productOwnerKey: 'abc',
        rating: 3,        
    },
    {
        productId: 7,
        img: img3,
        img2: img4,
        name: 'Shoe',
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: ['house', 'building'],
        subcategory: 'Interior Dec',
        type: 'trending',
        store: 'Kings Store',
        rating: 4,        
        productOwnerKey: 'abd'
    },
    {
        productId: 2,
        img: img5,
        img2: img6,
        name: 'Car',
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
        productId: 4,
        img: img7,
        img2: img8,
        name: 'Tesla',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        store: 'Align store',
        type: '',
        rating: 0,        
        productOwnerKey: 'abc'
    },
    {
        productId: 8,
        img: img9,
        img2: img10,
        name: 'Timberland',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        store: 'Align store',
        type: '',
        rating: 2,        
        productOwnerKey: 'abc'
    },
    {
        productId: 3,
        img: img11,
        img2: img12,
        name: 'Sneekers',
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        type: '',
        rating: 0,        
        productOwnerKey: 'abc'
    },
    {
        productId: 9,
        img: img13,
        img2: img14,
        name: 'Cameras',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        type: '',
        productOwnerKey: 'abc',
        rating: 4,        
    },
    {
        productId: 5,
        img: img15,
        img2: img16,
        name: 'Home',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        type: '',
        productOwnerKey: 'abc',
        rating: 1,      
    },
    {
        productId: 6,
        img: img17,
        img2: img18,
        name: 'Duplex',
        isNew: true,
        price: 12,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ratione voluptatibus aliquam delectus? Similique animi, sunt voluptatibus eveniet veniam distinctio totam obcaecati soluta, rem quidem ipsam, maxime temporibus harum eos.',
        category: '',
        subcategory: '',
        type: '',
        productOwnerKey: 'abc',
        rating: 5,        
    },
]

   
   const ProductCategories = [
    {
        name: 'Clothes',
        description: '',
        img: '/img/products/14.jpg',
    },
    {
        name: 'Fashion',
        description: '',
        img: '/img/products/15.jpg',
    },
    {
        name: 'Kitchen',
        description: '',
        img: '/img/products/4.jpg',
    },
    {
        name: 'Foods',
        description: '',
        img: '/img/products/11.jpg',
    },
    {
        name: 'Cars',
        description: '',
        img: '/img/products/7.jpg',
    },
    {
        name: 'Gadgets',
        description: '',
        img: '/img/products/11.jpg',
    },
    {
        name: 'Guns',
        description: '',
        img: '/img/products/4.jpg',
    },
    {
        name: 'Footwears',
        description: '',
        img: '/img/products/16.jpg',
    },
   
]
const subCategories = [
    {
        title: ''
    }
]

export { Products, ProductCategories }

