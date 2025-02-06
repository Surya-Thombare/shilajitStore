'use client'

import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface CartItem {
  id: string | number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Premium Shilajit Resin",
      price: 49.99,
      quantity: 5,
      image: "/assets/images/shilajit.jpg"
    },
    {
      id: 2,
      name: "Premium Shilajit Resin",
      price: 49.99,
      quantity: 2,
      image: "/assets/images/shilajit.jpg"
    },
  ])

  const updateQuantity = (id: string | number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id: string | number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const cartTotal = cartItems.reduce((total, item) =>
    total + (item.price * item.quantity), 0
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation />
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className="space-y-8">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <Image
                  width={300}
                  height={200}
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>

                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-500">Add some items to your cart to continue shopping</p>
        </div>
      )}
    </div>
  )
}