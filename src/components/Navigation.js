import { useState } from "react";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    {
      name: "Product",
      link: "#product",
    },
    {
      name: "Company",
      link: "#company",
    },
    {
      name: "Connect",
      link: "#connect",
      dropdown: [
        {
          name: "Contact",
          link: "#contact",
        },
        {
          name: "Newsletter",
          link: "#newsletter",
        },
        {
          name: "LinkedIn",
          link: "#linkedin",
        },
      ],
    },
  ];

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navigation">
      <div className="flexNav">
        <div className="logoName">
          <p>Blogr</p>
        </div>
        <nav className="nav">
          <ul className="navList">
            {menuItems.map((item, index) => (
              <li key={index} className="navItem">
                <a
                  href={item.link}
                  className={`navLink ${item.dropdown ? "hasDropdown" : ""}`}
                >
                  {item.name}
                </a>
                <img
                  src="./images/icon-arrow-light.svg"
                  alt="icon-nav-light"
                  onClick={item.dropdown ? handleDropdownToggle : undefined}
                />
                {item.dropdown && isDropdownOpen && (
                  <ul
                    className={`navListDropDown ${
                      isDropdownOpen ? "navListDropDownOpen" : ""
                    }`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link} className="navLinkDropDown">
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="cta">
        <div className="login">
          <a href="#login" className="loginLink">
            Login
          </a>
        </div>
        <button className="signUp">
          <a href="#signup" className="signUpLink">
            Sign up
          </a>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
