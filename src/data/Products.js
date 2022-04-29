import productImage from "../assets/product3.jpg";



const products = [
  {
    image: productImage,
    coverImage: productImage,
    price: "10",
    title: "HazelNut",
    description: "A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. ",
    productId: "hazel-nut",
  },
  {
    image: productImage,
    coverImage: productImage,
    price: "12",
    title: "DarkRoast",
    description: "A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. ",
    productId: "dark-roast",
  },
    {
    image: productImage,
    coverImage: productImage,
    price: "15",
    title: "LightRoast",
    description: "A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. ",
    productId: "light-roast",
  },
  {
    image: productImage,
    coverImage: productImage,
    price: "18",
    title: "yellowRoast",
    description: "A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. ",
    productId: "yellow-roast",
  },
];

export function getProducts() {
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex(
      product => product.productId === productId
    )
  ];
};