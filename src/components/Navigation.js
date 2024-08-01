function Navigation() {
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
          name: "Linkedln",
          link: "#linkedln",
        },
      ],
    },
  ];
  return (
    <div className="navigation">
      <div className="logoName">
        <p>Blogr</p>
      </div>
      <nav className="nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
              {item.dropdown && (
                <ul>
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <div className="login">
          <a href="#login" className="loginLink">
            Login
          </a>
        </div>
        <div className="signUp">
          <a href="#signup" className="signUpLink">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
