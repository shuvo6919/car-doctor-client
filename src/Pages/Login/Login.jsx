
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import loginImg from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
    const { x, signInWithGoogle } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    console.log("location on Login Page", location);


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result)
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row lg:flex-row gap-8">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-4xl text-center">Login:{x}</h2>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn text-black hover:bg-slate-300 hover:text-[#FF3811] bg-[#FF3811]" />
                        </div>

                        <div className=" flex flex-col items-center space-y-4">
                            <p>Or Sign In With</p>
                            <div className="flex gap-3">
                                <FaFacebook className="cursor-pointer text-2xl" />
                                <FaGoogle onClick={handleSignInWithGoogle} className="cursor-pointer text-2xl" />
                                <FaLinkedin className="cursor-pointer text-2xl" />
                            </div>
                            <p>Do not have any account? <Link to={"/signup"} className="text-[#FF3811]">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;