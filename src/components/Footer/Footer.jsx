import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>

<ul className="footer-links">
    <li><a href="">About</a></li>
    <li>Careers</li>
    <li>History</li>
    <li>Services</li>
    <li>Projects</li>
    <li>Blog</li>
</ul>

<ul className="socials">
    <li><a href=""><box-icon type='logo' name='facebook'></box-icon></a></li>
    <li><a href=""><box-icon name='instagram' type='logo' ></box-icon></a></li>
    <li><a href=""><box-icon name='twitter' type='logo' ></box-icon></a></li>
    <li><a href=""><box-icon name='linkedin' type='logo' ></box-icon></a></li>
    <li><a href=""><box-icon name='github' type='logo' ></box-icon></a></li>
</ul>
    </div>
  )
}

export default Footer
