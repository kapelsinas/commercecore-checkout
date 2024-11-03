const Navbar = () => {
  return (
    <nav className="border-b-[1px] border-[#E0E0E0] bg-[#FFFFFF]">
      <div className="flex items-center justify-between md:max-w-[668px] lg:max-w-[1040px] mx-auto w-full p-4 md:px-0 lg:px-4 xl:px-0">
        <img src="navbar/logo_with_text.svg" alt="Company Name Logo" className="h-6 lg:h-10" />
        <img
          src="navbar/shopping_bag.svg"
          alt="Shopping Bag Icon"
          className="h-5 w-5 lg:h-6 lg:w-6"
        />
      </div>
    </nav>
  );
};

export default Navbar;
