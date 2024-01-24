import { NavLink, Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-item' : 'pending-item'
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-item' : 'pending-item'
            }
            to="/product/10/Iphone-16"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-item' : 'pending-item'
            }
            to="/profile/cisrony/TechSkill360"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
