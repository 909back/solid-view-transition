import type { Banner, Product } from "~/interface";
import { setImgURL } from './functions'

export const BANNER_1: Banner = {
  productId: 1,
  title: "Elegance in\nEvery Move",
  description: "BOSS Collection 2026",
  backgroundColor: "linear-gradient(146deg, #E8E8E8 13.48%, #646464 101.2%)",
  image: setImgURL("/model_woman_4.png"),
  price: "₩ 850,000",
  link: "/product/1"
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Velvet Dress",
    price: 850_000,
    image: setImgURL('/model_woman_4.png'),
    sizes: ['L', "M", "S", 'XS'],
    imagePos: {
      top: -90,
    }

  },
  {
    id: 3,
    title: "Slacks",
    price: 1_280_000,
    image: setImgURL("/model_woman_2.png"),
    sizes: ['L', "M", "S", 'XS'],
    imagePos: {
      top: -70,
    }
  },
  {
    id: 4,
    title: "Jackets",
    price: 1_450_000,
    image: setImgURL("/model_woman_2.png"),
    sizes: ['L', "M", "S", 'XS'],
  },
  {
    id: 5,
    title: "Satin dress",
    price: 2_318_000,
    image: setImgURL("/model_woman_1.png"),
    sizes: ['L', "M", "S", 'XS'],
    imagePos: {
      top: -109
    }
  },
  {
    id: 6,
    title: "Blazer set",
    price: 5_120_000,
    image: setImgURL("/model_man_2.png"),
    sizes: ['L', "M", "S", 'XS'],
    imagePos: {
      top: -50,
    }
  },
]

export const MAIN_PRODUCT_LIST: Product[] = PRODUCTS.slice(1)