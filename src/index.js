import banner from "./banner.js";
import homepage from "./homepage.js";
import menuPage from "./menu.js";
import "./styles/reset.css";
import "./styles/style.css";

(function initial(){
  const content = document.getElementById("content");
  content.appendChild(banner());
  content.appendChild(menuPage());
})();