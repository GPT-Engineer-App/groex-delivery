import { Button } from "@/components/ui/button";

const CartPage = () => {
  // Mock data for cart items
  const cartItems = [
    { id: 1, name: "Apples", quantity: 2, price: 2.99 },
    { id: 2, name: "Bread", quantity: 1, price: 1.99 },
    // Add more items as needed
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
          </div>
          <p>${(item.quantity * item.price).toFixed(2)}</p>
        </div>
      ))}
      <div className="mt-4 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Button className="mt-2 bg-black text-white hover:bg-gray-800">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;