import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card bg-slate-300   shadow-xl text-black">
            <figure className="px-5 pt-5">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions flex justify-between items-center">
                    <p className='text-xl text-[#FF3811]'>Price : ${price}</p>
                    <button className="btn btn-error ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;