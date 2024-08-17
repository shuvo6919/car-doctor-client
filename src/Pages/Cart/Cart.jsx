import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";


const Cart = () => {
    const { user } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const url = `http://localhost:1039/orders?email=${user.email}`;
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setCarts(res.data);
            })
            .catch(err => console.log(err))
    }, [url])

    const handleDeleteService = (cartToDelete) => {
        fetch(`http://localhost:1039/orders/${cartToDelete._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }

    return (
        <div>
            <h1>Cart Page:{carts.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Order Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            carts.map(cart => <tr key={cart._id}>
                                <td>
                                    <button onClick={() => handleDeleteService(cart)}><IoIosCloseCircle className="text-error text-3xl " />
                                    </button>
                                </td>

                                <td className="flex items-center gap-4">
                                    <img className="max-h-16" src={cart?.img} alt="" />
                                    <h3>{cart?.title}</h3>
                                </td>
                                <td>
                                    <p>${cart?.price}</p>
                                </td>
                                <td><p>{new Date(cart?.orderedDate).toLocaleDateString('en-GB')}</p></td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Cart;