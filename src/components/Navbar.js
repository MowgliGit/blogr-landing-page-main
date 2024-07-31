import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { name: "Product", link: "#product" },
    { name: "Company", link: "#company" },
    {
      name: "Connect",
      link: "#connect",
      dropdown: [
        { name: "Contact", link: "#contact" },
        { name: "Newsletter", link: "#newsletter" },
        { name: "LinkedIn", link: "#linkedin" },
      ],
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="navBar">
      <div>
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <nav className="navigation">
        {menuItems.map((item, index) =>
          item.dropdown ? (
            <div
              className="dropdown"
              key={index}
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href={item.link}>{item.name}</a>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a href={subItem.link} key={subIndex}>
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a href={item.link} key={index}>
              {item.name}
            </a>
          )
        )}
      </nav>
    </div>
  );
}
