
const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto mt-10">
           
           <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl lg:text-4xl font-bold">The Little Herbivore</h1>
            </div>

            <div className="hidden lg:block lg:flex gap-4">
                <h1 className="text-2xl font-medium">Home</h1>
                <h1  className="text-2xl font-medium">Recipe</h1>
                <h1  className="text-2xl font-medium">About</h1>
                <h1  className="text-2xl font-medium">Search</h1>
            </div>

            <div className=" flex items-center gap-5">
                <div className="hidden lg:block">
                <label className="input input-bordered flex items-center gap-2">
                 <input type="text" className="grow" placeholder="Search" />
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                </label>
                </div>
                
                <div className="avatar">
                 <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
               <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
               </div>
            </div>
           </div>
            
        </div>
    );
};

export default Navbar;