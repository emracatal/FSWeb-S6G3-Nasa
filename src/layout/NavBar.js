const NavBar = () => {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            MainPage
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Some Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Some Link
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
