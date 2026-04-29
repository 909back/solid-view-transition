export interface Banner {
  title: string
  description: string
  backgroundColor?: string
  image: string
  price?: number | string
  link: string
}

export interface Product {
  id: number
  title: string
  price: number
  image: string
  imagePos?: Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>
}

