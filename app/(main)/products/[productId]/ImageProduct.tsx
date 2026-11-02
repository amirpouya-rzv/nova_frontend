import Image from 'next/image';
import React from 'react';
import config from "@/services/config";

const ImageProduct = ({product} : { product : string }) => {
    return (
        <div className='w-full'>
            
      <Image
        src={`${config.onlinePath}${product.imageUrl}`}
        width={1200}
        height={800}
        alt={product.name}
        unoptimized
        className="relative w-7/12 h-full rounded-2xl object-cover"
      />
        </div>
    );
};

export default ImageProduct;