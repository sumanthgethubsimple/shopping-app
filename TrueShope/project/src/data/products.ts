import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394649/pexels-photo-3394649.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Experience premium sound quality with these wireless headphones featuring active noise cancellation and 30-hour battery life.',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    features: ['Active Noise Cancellation', '30h Battery Life', 'Wireless Charging', 'Hi-Res Audio'],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 40kHz',
      'Battery Life': '30 hours',
      'Weight': '250g'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Wearables',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.',
    rating: 4.6,
    reviews: 189,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Rating': '5ATM',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    price: 899.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Photography',
    description: 'Capture stunning photos with this professional-grade camera lens featuring superior optics and fast autofocus.',
    rating: 4.9,
    reviews: 67,
    inStock: true,
    features: ['F/1.4 Aperture', 'Fast Autofocus', 'Weather Sealed', 'Image Stabilization'],
    specifications: {
      'Focal Length': '85mm',
      'Max Aperture': 'f/1.4',
      'Min Focus Distance': '0.85m',
      'Weight': '630g'
    }
  },
  {
    id: '4',
    name: 'Minimalist Desk Setup',
    price: 499.99,
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Furniture',
    description: 'Create the perfect workspace with this minimalist desk setup featuring premium materials and clean design.',
    rating: 4.7,
    reviews: 132,
    inStock: true,
    features: ['Solid Wood Construction', 'Cable Management', 'Ergonomic Design', 'Easy Assembly'],
    specifications: {
      'Dimensions': '120 x 60 x 75cm',
      'Material': 'Solid Oak',
      'Weight Capacity': '50kg',
      'Finish': 'Natural Oil'
    }
  },
  {
    id: '5',
    name: 'Luxury Leather Bag',
    price: 349.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Handcrafted luxury leather bag perfect for professionals. Features premium Italian leather with timeless design.',
    rating: 4.8,
    reviews: 94,
    inStock: true,
    features: ['Italian Leather', 'Handcrafted', 'Multiple Compartments', 'Lifetime Warranty'],
    specifications: {
      'Material': '100% Italian Leather',
      'Dimensions': '35 x 25 x 15cm',
      'Weight': '1.2kg',
      'Color': 'Cognac Brown'
    }
  },
  {
    id: '6',
    name: 'Smart Home Speaker',
    price: 199.99,
    image: 'https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Voice-controlled smart speaker with premium audio quality and seamless smart home integration.',
    rating: 4.5,
    reviews: 203,
    inStock: true,
    features: ['Voice Control', '360° Sound', 'Smart Home Hub', 'Premium Audio'],
    specifications: {
      'Drivers': '2x 2" + 1x 4" Woofer',
      'Connectivity': 'Wi-Fi, Bluetooth 5.0',
      'Voice Assistant': 'Built-in',
      'Dimensions': '15 x 15 x 20cm'
    }
  }
];

export const categories = [
  'All',
  'Electronics',
  'Wearables',
  'Photography',
  'Furniture',
  'Fashion'
];