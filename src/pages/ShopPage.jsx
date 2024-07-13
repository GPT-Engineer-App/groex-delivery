import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for grocery items
  const groceryItems = [
    { id: 1, name: "Apples", price: 2.99, image: "/placeholder.svg" },
    { id: 2, name: "Bread", price: 1.99, image: "/placeholder.svg" },
    { id: 3, name: "Milk", price: 3.49, image: "/placeholder.svg" },
    // Add more items as needed
  ];

  const filteredItems = groceryItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shop Groceries</h1>
      <Input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="mb-2">${item.price.toFixed(2)}</p>
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;