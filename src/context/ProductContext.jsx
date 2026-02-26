import { createContext, useState } from 'react'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products] = useState([
    {
      id: 1,
      name: "Bulk SMS Gateway",
      description: "High-volume messaging for enterprises",
      image: "/assets/products/sms-gateway.png"
    },
    {
      id: 2,
      name: "API Integration",
      description: "Seamless system connectivity",
      image: "/assets/products/api-integration.png"
    }
  ])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}