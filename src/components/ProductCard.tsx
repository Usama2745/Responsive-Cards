import Image from "next/image"

export default function ProductCard (){
    return (

            <>
            <title >Product Card</title>
                <h1 className="bg-blue-300 text-center font-sansarif  py-6 underline">Product Card </h1>
            <div className="py-8 px-12 bg-purple-200 grid sm:grid-row-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between">
            <div className="border-rounded md:6/12 w-full mb-20 ">
                <div className="items-center justify-center px-5">
                    <Image src="/shirt1.jpg" alt="shirt" width={200} height={200} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:1500</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>

            <div className="border-rounded md:6/12 w-full mb-20">
                <div className="items-center justify-center px-5">
                    <Image src="/shirt2.webp" alt="shirt" width={200} height={200} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:1000</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>

            <div className="border-rounded md:6/12 w-full mb-20">
                <div className="items-center justify-center px-5">
                    <Image src="/tshirt.jfif" alt="shirt" width={200} height={300} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:1200</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>


            <div className="border-rounded md:6/12 w-full mb-20">
                <div className="items-center justify-center px-5">
                    <Image src="/images.jfif" alt="shirt" width={200} height={200} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:500</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>

            <div className="border-rounded md:6/12 w-full mb-20">
                <div className="items-center justify-center px-5">
                    <Image src="/pic.webp" alt="shirt" width={200} height={300} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:500</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>

            <div className="border-rounded md:6/12 w-full mb-20">
                <div className="items-center justify-center px-5">
                    <Image src="/pic2.webp" alt="shirt" width={200} height={200} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:500</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>

            <div className="border-rounded md:6/12 w-full mb-20">
                <div className="items-center justify-center px-5">
                    <Image src="/pic3.jpg" alt="shirt" width={200} height={200} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:500</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>

            <div className="border-rounded md:6/12 w-full mb-20">
                <div className="items-center justify-center px-5">
                    <Image src="/images1.jfif" alt="shirt" width={200} height={200} />
                </div>
                <p className="text-around px-20 pt-10 ">Rs:500</p>

                <button className="bg-blue-400 text-white px-10 mx-10 py-4 rounded-md">Buy Now</button>

            </div>



        </div></>
    )
}
