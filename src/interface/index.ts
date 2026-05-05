export interface Banner {
  productId: number
  title: string
  description: string
  backgroundColor?: string
  image: string
  price?: number | string
  link: string
}

export type Position = Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>
export type Size = 'L' | 'M' | 'S' | 'XS'


export interface Product {
  id: number
  title: string
  price: number
  image: string
  imagePos?: Position
  sizes?: Size[]
}

