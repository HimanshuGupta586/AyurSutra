"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, Star, Package, Plus, Minus } from "lucide-react"

export function PharmacySection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cart, setCart] = useState("")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "churna", name: "Churna" },
    { id: "tablets", name: "Tablets" },
    { id: "oils", name: "Oils" },
    { id: "kashayam", name: "Kashayam" },
    { id: "ghrita", name: "Ghrita" },
  ]

  const products = [
    {
      id: "1",
      name: "Ashwagandha Churna",
      category: "churna",
      price: 450,
      originalPrice: 500,
      rating: 4.8,
      reviews: 124,
      image: "/ashwagandha-powder-ayurveda.jpg",
      description: "Premium quality Ashwagandha powder for stress relief",
      inStock: true,
      prescription: false,
    },
    {
      id: "2",
      name: "Triphala Tablets",
      category: "tablets",
      price: 320,
      originalPrice: 350,
      rating: 4.6,
      reviews: 89,
      image: "/triphala-tablets-ayurveda.jpg",
      description: "Natural digestive support with three fruits",
      inStock: true,
      prescription: false,
    },
    {
      id: "3",
      name: "Brahmi Oil",
      category: "oils",
      price: 280,
      originalPrice: 320,
      rating: 4.9,
      reviews: 156,
      image: "/brahmi-oil-ayurveda.jpg",
      description: "Pure Brahmi oil for hair and scalp health",
      inStock: true,
      prescription: true,
    },
    {
      id: "4",
      name: "Saraswatarishta",
      category: "kashayam",
      price: 180,
      originalPrice: 200,
      rating: 4.7,
      reviews: 67,
      image: "/saraswatarishta-ayurveda.jpg",
      description: "Brain tonic for memory enhancement",
      inStock: false,
      prescription: true,
    },
    {
      id: "5",
      name: "Mahanarayan Oil",
      category: "oils",
      price: 380,
      originalPrice: 420,
      rating: 4.5,
      reviews: 92,
      image: "/mahanarayan-oil-ayurveda.jpg",
      description: "Joint and muscle pain relief oil",
      inStock: true,
      prescription: false,
    },
    {
      id: "6",
      name: "Chyawanprash",
      category: "churna",
      price: 650,
      originalPrice: 750,
      rating: 4.8,
      reviews: 203,
      image: "/chyawanprash-ayurveda.jpg",
      description: "Immunity booster with 40+ herbs",
      inStock: true,
      prescription: false,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  const removeFromCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }))
  }

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0)
  }

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, count]) => {
      const product = products.find((p) => p.id === productId)
      return total + (product?.price || 0) * count
    }, 0)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Ayurvedic Pharmacy</h1>
          <p className="text-muted-foreground mt-1">Authentic Ayurvedic medicines and supplements</p>
        </div>
        <Button className="relative">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Cart ({getTotalItems()})
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive">Out of Stock</Badge>
                </div>
              )}
              {product.prescription && (
                <Badge className="absolute top-2 right-2" variant="secondary">
                  Prescription Required
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <div className="flex items-center justify-between pt-2">
                  {cart[product.id] > 0 ? (
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" onClick={() => removeFromCart(product.id)}>
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="font-medium">{cart[product.id]}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                      className="flex-1"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart Summary */}
      {getTotalItems() > 0 && (
        <Card className="fixed bottom-4 right-4 w-80 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Cart Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Total Items:</span>
              <span className="font-medium">{getTotalItems()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total Amount:</span>
              <span className="font-bold text-primary">₹{getTotalPrice()}</span>
            </div>
            <Button className="w-full">
              <Package className="w-4 h-4 mr-2" />
              Proceed to Checkout
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
