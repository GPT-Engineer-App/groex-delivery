import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to GroEx</h1>
      <p className="text-xl mb-8 text-center">
        Your one-stop shop for express grocery delivery.
      </p>
      <Button asChild className="bg-black text-white hover:bg-gray-800">
        <Link to="/shop">Start Shopping</Link>
      </Button>
    </div>
  );
};

export default HomePage;