import { useLoaderData, useParams } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData();
    const { title, img, price, description } = service;
    const handleOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const message = form.message.value;
        console.log(message)

    }
    return (
        <div>
            <h1 className="text-4xl text-center my-4">Check Out</h1>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-4">
                        <h2 className="text-[#FF3811] text-3xl">{title}</h2>
                        <p>{description}</p>
                        <p className="text-2xl font-bold">Price : {price}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleOrder} className="bg-gray-600 p-8 my-8 grid grid-cols-2 gap-8 ">
                <input className="input input-bordered input-error w-full " type="text" name="firstName" placeholder="First Name" />
                <input className="input input-bordered input-error w-full " type="text" name="lastName" placeholder="Last Name" />
                <input className="input input-bordered input-error w-full " type="text" name="phoneNumber" placeholder="Your Phone" />
                <input className="input input-bordered input-error w-full " type="text" name="email" placeholder="Your Email" />
                {/* <input className="input input-bordered input-error w-full col-span-2" type="text" name="message" placeholder="Your Message" /> */}
                <textarea className="input input-bordered input-error w-full col-span-2 h-24" name="message" placeholder="Your Message" ></textarea>
                <input type="submit" value="Order Confirm" className="btn bg-[#FF3811] col-span-2" />

            </form>
        </div>
    );
};

export default Checkout; 