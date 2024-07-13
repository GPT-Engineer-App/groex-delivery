import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City, Country",
  };

  // Mock order history
  const orderHistory = [
    { id: 1, date: "2023-03-01", total: 35.99 },
    { id: 2, date: "2023-02-15", total: 42.50 },
    // Add more orders as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <Button className="mt-2 bg-black text-white hover:bg-gray-800">
          Edit Profile
        </Button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        {orderHistory.map((order) => (
          <div key={order.id} className="border-b py-2">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;