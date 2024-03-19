const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] flex  items-center justify-between py-6 px-32">
      <div className="flex items-center gap-2">
        <img
          className="bg-[#006CE4] w-[30px] "
          src="https://i.ibb.co/kgPb253/plane.png"
        ></img>
        <h2 className="text-[#FFB700] text-2xl font-extrabold font-Inter">
          Air<span className="text-[#006CE4] font-medium">Book</span>
        </h2>
      </div>

      <div>
        <ul className="flex gap-4 text-xl font-semibold">
          <li>Blog</li>
          <li>Offer</li>
          <li>Airlines</li>
          <li>About</li>
        </ul>
      </div>

      <div>
        <button className="bg-[#006CE4] text-white text-xl px-7 py-2 rounded-xl ">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
