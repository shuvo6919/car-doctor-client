import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {
    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const { _id, title, img, price, description } = service;
    const navigate = useNavigate();
    const handleOrder = (e) => {
        e.preventDefault()
        const form = e.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const userName = firstName + " " + lastName;
        const orderedDate = new Date();

        const order = {
            userName, phone, email, message, service_id: _id, title, img, price, orderedDate
        };
        fetch("http://localhost:1039/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                console.log("data===", data)
                if (data.insertedId) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Order confirmed!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/cart")
                }
            })

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
                <input className="input input-bordered input-error w-full " type="text" name="phone" placeholder="Your Phone" />
                <input className="input input-bordered input-error w-full " type="text" name="email" placeholder="Your Email" defaultValue={user.email} />
                {/* <input className="input input-bordered input-error w-full col-span-2" type="text" name="message" placeholder="Your Message" /> */}
                <textarea className="input input-bordered input-error w-full col-span-2 h-24" name="message" placeholder="Your Message" ></textarea>
                <input type="submit" value="Order Confirm" className="btn bg-[#FF3811] col-span-2 text-white" />

            </form>
        </div>
    );
};

export default Checkout; 