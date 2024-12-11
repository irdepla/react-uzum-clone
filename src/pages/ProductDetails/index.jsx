import { useEffect, useState } from 'react';
import { meta } from "@eslint/js";
import { useParams } from 'react-router';
import { apiClient } from '../../API/axios';
const API_BASE_URL = meta;


const ProductDetails = () => {


    const id = useParams().id;
    const [product, setProduct] = useState([]);

    async function getProducts(id) {
        try {
            const res = apiClient.get("products/" + id)
            setProduct((await res).data.data)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getProducts(id)
    }, []);


    return (
        <section className='product-details'>
            <div className="container">
            <div className='product-details__wrapper flex justify-between items-center'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-bold text-2xl'>{product.name}</h2>
                        <img src={product.image} alt="" />
                    </div>
                    <div className='w-[300px] p-3 flex flex-col border rounded-[12px] gap-4 border-black'>
                        <p className=' text-center text-2xl font-bold tracking-[2.5px]'>${product.price}</p>
                        <p>{product.description}</p>
                        <button className=' p-[18px] rounded-[14px] text-white bg-[#7000ff]'>Savatga qo'shish</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
