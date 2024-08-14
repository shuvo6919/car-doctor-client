
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"
const HomeBanner = () => {
    const bannerImg = [img1, img2, img3, img4, img5, img6]
    return (
        <div className="carousel w-full max-h-[600px] rounded-3xl">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={img1}
                    className="w-full" />
                <div className="absolute left-0 top-0 text-white   flex items-center w-full h-full  bg-gradient-to-br from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-4 md:w-1/2 lg:w-1/2  pl-5">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4 " >Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full" />
                <div className="absolute left-0 top-0 text-white   flex items-center w-full h-full  bg-gradient-to-br from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-4 md:w-1/2 lg:w-1/2  pl-5">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4 " >Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full" />
                <div className="absolute left-0 top-0 text-white   flex items-center w-full h-full  bg-gradient-to-br from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-4 md:w-1/2 lg:w-1/2  pl-5">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4 " >Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full" />
                <div className="absolute left-0 top-0 text-white   flex items-center w-full h-full  bg-gradient-to-br from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-4 md:w-1/2 lg:w-1/2  pl-5">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4 " >Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={img5}
                    className="w-full" />
                <div className="absolute left-0 top-0 text-white   flex items-center w-full h-full  bg-gradient-to-br from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-4 md:w-1/2 lg:w-1/2  pl-5">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4 " >Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={img6}
                    className="w-full" />
                <div className="absolute left-0 top-0 text-white   flex items-center w-full h-full  bg-gradient-to-br from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-4 md:w-1/2 lg:w-1/2  pl-5">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4 " >Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;