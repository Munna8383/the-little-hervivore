

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto mt-20 bg-[url(https://i.ibb.co/pR0ycjY/Group-5-1.png)] text-white px-2 py-6 lg:py-40 lg:px-10 bg-no-repeat bg-contain lg:bg-cover lg:space-y-8 space-y-1 rounded-xl overflow-hidden">

           <div className="text-center text-2xl space-y-2 lg:text-5xl font-bold">
            <h1>Discovered An exceptional Cooking </h1>
            <h2>Class Tailored For You</h2>
           </div>

           <div className="text-center text-sm lg:text-xl font-normal lg:font-semibold">
            <p className="w-2/3 mx-auto"> If you are in need of a little culinary guidance, our expert chefs are here to help. Check out our instructional videos and cooking tutorials for step-by-step guidance on mastering everything from basic knife skills to advanced culinary techniques.</p>
           </div>

           <div>
              <div className="text-center space-x-5">
              <button className="bg-[#35f3a3] px-2 py-1 lg:px-6 lg:py-3 text-sm lg:text-xl font-semibold rounded-2xl">Explore Now</button>
            <button className=" px-6 py-3 text-xl  font-semibold rounded-2xl btn btn-outline text-white">Our Feedback</button>
              </div>
           </div>




            
        </div>
    );
};

export default Banner;