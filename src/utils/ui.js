export const toggleMenu = () => {
  var x = document.getElementById("navbar");
  if (x.className === "closed-menu") {
    x.className = "open-menu";
  } else {
    x.className = "closed-menu";
  }
}
