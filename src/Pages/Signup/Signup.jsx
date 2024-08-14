import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import loginImg from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
    const { signUpWithEmailPassword } = useContext(AuthContext)
    const hadnleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password doesn't match!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

        signUpWithEmailPassword(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully created",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.code,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row lg:flex-row gap-8">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={hadnleSignUp} className="card-body">
                        <h2 className="text-4xl text-center">Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn text-black hover:bg-slate-300 hover:text-[#FF3811] bg-[#FF3811]" />
                        </div>

                        <div className=" flex flex-col items-center space-y-4">
                            <p>Or Sign In With</p>
                            <div className="flex gap-3">
                                <FaFacebook className="cursor-pointer text-2xl" />
                                <FaGoogle className="cursor-pointer text-2xl" />
                                <FaLinkedin className="cursor-pointer text-2xl" />
                            </div>
                            <p>Already have an account? <Link to={"/login"} className="text-[#FF3811]">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;