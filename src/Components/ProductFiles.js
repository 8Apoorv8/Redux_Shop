import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/Actions/Actions';
import { Link } from 'react-router-dom'
const ProductFiles = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.allProducts.products)



    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => console.log("Error is", err));

        dispatch(setProducts(response.data));
    };


    useEffect(() => {
        fetchProducts();


    }, []);


    const renderList = products.map((product) => {

        const { id, title, image, price } = product

        return (

            <div key={id}>
                <Link to={`/product/${id}`}>
                    <div className="border-2 border-red-200 shadow-xl hover:shadow-red-300 h-[440px] text-center p-6 rounded-md hover:scale-105 transition-all duration-200 bg-white">
                        <img
                            src={image}
                            alt="productImg"
                            className="h-[200px] md:w-[250px] w-full object-fill"
                        />
                        <p className="text-xl my-4">{title}</p>
                        <div className="flex justify-between">
                            <p className="text-xl text-gray-800">$ {price}</p>
                            <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
                                ADD TO KART
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })


    return (
        <div className="mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-16 md:px-8">{renderList}</div>
        // <div className="mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto" >
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="IMAGE"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">KING</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">$ PRICE</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>
        //     <div className="border-2 border-red-700 h-[340px] text-center p-6 rounded-md">
        //         <img
        //             src="https://w7.pngwing.com/pngs/197/789/png-transparent-india-map-india-world-silhouette-map-thumbnail.png"
        //             alt="productImg"
        //             className="h-[200px] w-[250px]"
        //         />
        //         <p className="text-xl my-4">Iphone11</p>
        //         <div className="flex justify-between">
        //             <p className="text-xl text-gray-800">price-65k</p>
        //             <button className="px-4 py-1 bg-[#ee8787] rounded-md font-semibold hover:bg-[#e97f7f] transition-all">
        //                 ADD TO KART
        //             </button>
        //         </div>
        //     </div>

        // </div >
    )
}

export default ProductFiles