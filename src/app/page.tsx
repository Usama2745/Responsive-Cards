import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Increment from "@/components/Increment"
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
    <ProductCard />
    <Increment />
    <Button btnText="Submit" 
    bgColor="bg-purple-300" />
    </div>
  );
}
