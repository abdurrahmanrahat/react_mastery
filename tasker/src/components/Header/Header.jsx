const Header = () => {
  return (
    <nav className="py-4 md:py-6 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/">
          <h2 className="text-xl font-semibold italic text-white">Logo Here</h2>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
};

export default Header;
