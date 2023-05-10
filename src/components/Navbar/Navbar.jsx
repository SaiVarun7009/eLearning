import React from 'react'
import './Navbar.css';
import Logo from './BUCS.png'

const Navbar = () => {

  // const handleDropdown = () => {
  //   const ele = document.getElementsByClassName('categoriesDropdown')[0]
  //   console.log(ele)
  // }

  return (
    <section className='navbarSection'>
        <nav className='navbar'>
          <div className="navStart">
            <img className='logo' src={Logo} alt="Logo" />
          </div>
          <div className="categories" >
            Categories
            {/* <div className='categoriesDropdown'>
              <p>Full night</p>
              <p>3 hours</p>
              <p>1 hour</p>
              <p>First time package (3mins)</p>
            </div> */}
          </div>
          <div className="searchBox">
            <input
              spellcheck="false"
              type="text"
              class="search"
              id="search"
              placeholder="Search"
            />
            <button class="material-symbols-outlined"><iconify-icon icon="material-symbols:search-rounded" style={{fontSize: "30px"}}></iconify-icon></button>
          </div>
          <div className="customCourse">
            <li><a href="#">Create</a></li>
            <button className="Icons">
              <iconify-icon icon="game-icons:teacher" style={{fontSize:"20px"}}></iconify-icon>
            </button>
            
          </div>
          <div className="navEnd">
            <button className='Icons'>
              <iconify-icon icon="la:facebook-messenger" style={{fontSize:"30px"}}></iconify-icon>
            </button>
            <button className="Icons">
              <iconify-icon icon="emojione:newspaper" style={{fontSize:"30px"}}></iconify-icon>
            </button>
            <button className="Icons">
              <iconify-icon icon="material-symbols:notifications-outline-rounded" style={{fontSize:"30px"}}></iconify-icon>
            </button>
            <button className="Icons">
              <iconify-icon icon="icons8:create-new" style={{fontSize:"30px"}}></iconify-icon>
            </button>
            <button className="Icons">
              <iconify-icon icon="gg:profile" style={{fontSize:"30px"}}></iconify-icon>
            </button>
            
        
          </div>
        </nav>
    </section>
  )
}

export default Navbar