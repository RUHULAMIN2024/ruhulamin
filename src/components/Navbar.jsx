
const Navbar = () => {
  const links = <>
    <a href="#home" className="nav_items">
      Home
    </a>
    <a href="#experience" className="nav_items">
      Experience
    </a>
    <a href="#skills" className="nav_items">
      Skills
    </a>
    <a href="#projects" className="nav_items">
      Projects
    </a>
    <a href="#contact" className="nav_items">
      Contact
    </a>
  </>
  return (

    <div data-aos="fade-down"
      data-aos-duration="1000" className="navbar z-10 sticky top-0 nav_bar  ">
      <div className="navbar-start w-full lg:w-1/4  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2  rounded-box w-52">
            {links}
          </ul>
        </div>
        <h1 className="nav_items uppercase cursor-pointer">Ruhul Amin</h1>
      </div>
      <div className="navbar-end hidden lg:flex flex-1">
        <ul className="menu menu-horizontal px-1">

          {links}
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
