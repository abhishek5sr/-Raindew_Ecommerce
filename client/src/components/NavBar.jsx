import  '../styling/NavBar.css';
import NavCategory from './NavCategory.jsx';
import Location from './location.jsx';
function NavBar() {
  return (
    <div className="nav">
      <div className="navbar-logo">Raindew</div>
      <input id="search-bar" type="text" className="search-bar" placeholder="Search for products..." />
       <div><NavCategory /></div>
       <div id="location"><Location /></div>
    </div>
  );
}

    export default NavBar;