
import braBlue1 from '../assets/braBlue1.jpg';
import braBlue2 from '../assets/braBlue2.jpg';
import tote1 from '../assets/tote1.jpg';
import tote2 from '../assets/tote2.jpg';
import Amena1 from '../assets/Amena1.jpg';
import Amena2 from '../assets/Amena2.jpg';
import blue1 from '../assets/blue1.jpg';
import blue2 from '../assets/blue2.jpg';
import tulds1 from '../assets/tulds1.jpg';
import tulds2 from '../assets/tulds2.jpg';

const products = [
    {
        id: 1,
        name: " Ruspina Amena T-Shirt ",
        description: "Gen 23.24 with blue man logo - 100% coton - Black",
        price: 27,
        discountPrice: 30,
        discount: "10% OFF",
        
        sizes: ["S", "M", "L"],
        images: [
            Amena1,
            Amena2
            
        ],
        sku: "A264671",
        availability: "In Stock",
        brand: "Ruspina",
        category: "T-Shirt",
        descriptionLong: `A high-quality T-shirt with a vibrant and captivating design that showcases the unique culture of AIESEC Ruspina. This T-shirt represents the commitment and dedication of its members, making it a proud symbol of belonging and purpose.`
    },
    
    {
        id: 2,
        name: " Aiesec تونس mini tote bag",
        description: "With Tunisian map - beige",
        price: 10.8,
        discountPrice: 12,
        discount: " 10.42% OFF",
       
        images: [
            tote1,
            tote2
        ],
        sku: "B127845",
        availability: "In Stock",
        brand: "Ruspina",
        category: "Tote Bag",
        descriptionLong: `A mini tote bag crafted with high-quality materials, designed to proudly represent your affiliation with AIESEC in Tunisia. Perfect for showcasing your connection to the organization with both style and durability.`
    },
    {
        id: 3,
        name: " Aiesec Ruspina blue T-Shirt",
        description: "With blue man logo - 100% coton - Blue",
        price: 27,
        discountPrice: 30,
        discount: "10% OFF",
       
        sizes: ["S", "M", "L"],
        images: [
            blue1,
            blue2
        ],
        sku: "A371569",
        availability: "In Stock",
        brand: "Ruspina",
        category: "T-Shirt",
        descriptionLong: `A premium T-shirt that celebrates leadership and global impact. Made with high-quality materials for comfort and style.`
    },
    {
        id: 4,
        name: "Aiesec Ruspina BluBlu Bracelet",
        description: "with Debossed ink filled - Ruspina Logo - Blue ",
        price: 5.38,
        discountPrice: 6,
        discount: "10.33% OFF",
       
        images: [
            braBlue2,
            braBlue1
        ],
        sku: "B248571",
        availability: "In Stock",
        brand: "Unity",
        category: "Bracelet",
        descriptionLong: `The ultimate bracelet "روسبينا تعلو ولا يعلى عليها" that symbolizes striving for excellence, making it the perfect addition to any AIESEC member’s collection.`
    },
    {
        id: 5,
        name: "Tu'LDS 2021 T-shirt",
        description: "With Attack on Titan Logo - 100 % coton - Black",
        price: 27,
        discountPrice: 30,
        discount: "10% OFF",
       
        sizes: ["S", "M", "L"],
        images: [
            tulds1,
            tulds2
        ],
        sku: "A462789",
        availability: "In Stock",
        brand: "Ruspina",
        category: "T-Shirt",
        descriptionLong: `A T-shirt that carries special memories for many of us, marking the first national conference after the pandemic. A symbol of resilience and togetherness during a significant moment in our journey.`
    },
  
    
];

export default products;
