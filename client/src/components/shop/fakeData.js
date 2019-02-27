const items = [
  {
    id: 1,
    name: 'Cloyd Shirt',
    currencey: '$',
    price: 200,
    salePrice: null,
    category: 'Shirting',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: false,
    isAddedToCart: false,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/dvn-shirt-long-blue01_1alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/dvn-shirt-long-blue02_1alt-700x904.jpg',
    ],
    rate: 4.67,
  },
  {
    id: 2,
    name: 'Turtleneck Sweater',
    currencey: '£',
    price: 300,
    salePrice: null,
    category: 'Sweaters',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/mm-turtlenec-green01alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/mm-turtlenec-green02alt-700x904.jpg',
    ],
    rate: 4.5,
  },
  {
    id: 3,
    name: 'Padded Jacket',
    currencey: '$',
    price: 715,
    salePrice: null,
    category: 'Outerwear',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/marni-down-jacket-grey01alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/marni-down-jacket-grey01alt-700x904.jpg',
    ],
    rate: 4.67,
  },
  {
    id: 4,
    name: 'Gift Card',
    currencey: '£',
    price: 100,
    salePrice: null,
    category: 'Accessories',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/12/Atelier-gift_card_100-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/12/Atelier-gift_card_100-700x904.jpg',
    ],
    rate: 5,
  },
  {
    id: 5,
    name: 'Canada Terrazzo Scarf',
    currencey: '£',
    price: 140,
    salePrice: null,
    category: 'Accessories',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/acne-scarf-leo01alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/acne-scarf-leo02alt-700x904.jpg',
    ],
    rate: 5,
  },
  {
    id: 6,
    name: 'Turtleneck Sweater Grey',
    currencey: '$',
    price: 190,
    salePrice: null,
    category: 'Sweaters',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/ami-turtle-grey001alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/ami-turtle-grey002alt-700x904.jpg',
    ],
    rate: 3,
  },
  {
    id: 7,
    name: 'Slip-Ons',
    currencey: '£',
    price: 265,
    salePrice: null,
    category: 'Footwear',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-slipper-grey0001_1alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-slipper-grey0003_1alt-700x904.jpg',
    ],
    rate: 3,
  },
  {
    id: 8,
    name: 'Biblio Sunglasses',
    currencey: '£',
    price: 80,
    salePrice: null,
    category: 'Accessories',
    status: 'soldout', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/kaibosh-brown01alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/kaibosh-brown02alt-700x904.jpg',
    ],
    rate: 3,
  },
  {
    id: 9,
    name: 'Achilles Mid',
    currencey: '£',
    price: 280,
    salePrice: null,
    category: 'Footwear',
    status: 'stock', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-high-suade-yellowish0001_1alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-high-suade-yellowish0003_1alt-700x904.jpg',
    ],
    rate: 3,
  },
  {
    id: 10,
    name: 'Achilles Low',
    currencey: '£',
    price: 265,
    salePrice: 240,
    category: 'Footwear',
    status: 'sale', // (sale, sold out, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-suade-grey0001_2alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/cp-suade-grey0003_2-700x904.jpg',
    ],
    rate: 3,
  },
  {
    id: 11,
    name: 'Plain Backpack',
    currencey: '£',
    price: 360,
    salePrice: 305,
    category: 'Accessories',
    status: 'sale', // (sale, soldout, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/plain_backpack_1b-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/plain_backpack_2b-700x904.jpg',
    ],
    rate: 3,
  },
  {
    id: 12,
    name: 'Knitted Hat',
    currencey: '£',
    price: 60,
    salePrice: null,
    category: 'Accessories',
    status: 'stock', // (sale, soldout, stock)
    isOnWishlist: true,
    isAddedToCart: true,
    images: [
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/beanie_01_1alt-700x904.jpg',
      'http://atelier.swiftideas.com/wp-content/uploads/2014/11/6_14alt-700x904.jpg',
    ],
    rate: 4.67,
  },
];

export default items;
