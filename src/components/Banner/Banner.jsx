import './Banner.css'

const Banner = () => {
    return (
        <div className="container mx-auto text-center bg flex items-center">
           <div className="max-w-4xl mx-auto">
                <h1 className="mb-6 font-bold text-5xl text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className='text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="mt-14 flex justify-center gap-7">
                        <button className="px-7 py-5 bg-green-500 rounded-3xl font-semibold">Explore Now</button>
                        <button className="px-7 py-5 bg-transparent rounded-3xl font-semibold text-white outline outline-1 outline-white">Our Feedback</button>
                    </div>
           </div>
        </div>
    );
};

export default Banner;