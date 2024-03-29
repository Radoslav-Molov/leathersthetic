import * as React from "react";

const pages = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "collections" },
  { name: "How its made", href: "how-its-made" },
  { name: "About", href: "about" },
];

function NavigationBar() {
  const [headerScrolled, setHeaderScrolled] = React.useState<boolean>(false);
  const [windowWidth, setWindowWidth] = React.useState<boolean>(false);
  const [menuToggled, setMenuToggled] = React.useState<boolean>(false);

  window.onscroll = function () {
    if (window.scrollY > 70) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  window.onresize = function () {
    if (window.innerWidth < 900) {
      setWindowWidth(true);
    } else {
      setWindowWidth(false);
    }
  };

  React.useEffect(() => {
    window.innerWidth < 900 && setWindowWidth(true);
    console.log(window.innerWidth);
  }, []);

  const menuToggle = () => {
    menuToggled ? setMenuToggled(false) : setMenuToggled(true);
  };

  const scrollToContacts = (): void => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div
      id={
        headerScrolled
          ? windowWidth
            ? "navbar responsive"
            : "navbar"
          : windowWidth
          ? "navbar_transparent responsive"
          : "navbar_transparent"
      }
    >
      <div className={menuToggled ? "navbar_items_menu" : "navbar_items"}>
        {pages.map((page) => (
          <a
            href={page.href}
            className={menuToggled ? "each_nav_item_menu" : "each_nav_item"}
            key={page.name}
          >
            {page.name}
          </a>
        ))}
        <a
          href='javascript:void(0)'
          onClick={scrollToContacts}
          className={menuToggled ? "each_nav_item_menu" : "each_nav_item"}
          key='contacts'
        >
          Contacts
        </a>
        <a className='menu' href='javascript:void(0);' onClick={menuToggle}>
          <img src='menu.png' className='menu_icon' alt='' />
        </a>
      </div>
      <div className='logo_wrapper'>
        <img
          className={menuToggled ? "logo_menu" : "logo"}
          src={!headerScrolled ? "white-logo.png" : "black-logo.png"}
          alt='Logo'
        />
      </div>
    </div>
  );
}
export default NavigationBar;
