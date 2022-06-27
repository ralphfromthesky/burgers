import React from "react";
import "../App.css";

//  let menu = document.getElementById("menu");
//  let nav = document.getElementById("nav")

//  menu.addEventListener('click', () => {
//    nav.classList.toggle('show');
//  });

function Header() {
  return (
    <>
      <section>
        <header>
          <div className="mainHead">
            <h1>
              <i class="bx bx-cookie"></i> FoodFest
            </h1>
            <ul className="nav" id="nav">
              <li>Home</li>
              <li>Services</li>
              <li>Product</li>
              <li>Contacts</li>
            </ul>
            <div className="bot">
              <button className="btn">Order Now!</button>
            </div>
            <div className="menu" id="menu">
              <i class="bx bx-menu" id="menu-icon"></i>
            </div>
          </div>
        </header>
      </section>

      <section>
        <div className="mainBody">
          <div className="mainContent">
            <div className="first"></div>
            <h3>They Keep On coming back like Crazy Bananas</h3>
            <h1 className="Text">
              The Most Tasting Burger with <br /> The Best Price in Town
            </h1>
            <h2>Order Now and Get 50% discount Plus free Spaghetti</h2>
            <div className="first" id="second"></div>

            <div>
              <button className="bts">Grab Now!</button>
            </div>
            <div className="social">
              <a href="https://www.facebook.com/ralphsantolorin">
                <i class="bx bxl-facebook-square"></i>
              </a>
              <a href="https://www.facebook.com/ralphsantolorin">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="https://www.facebook.com/ralphsantolorin">
                <i class="bx bxl-instagram-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
