const door1 = document.querySelector(".door1");
const door2 = document.querySelector(".door2");
const openButton = document.querySelector(".open");
const bar = document.querySelector(".metal-bar");

//on button press -> open doors and remove them
openButton.addEventListener("click", function () {
  unloadScrollBars();
  door1.style.marginTop = "-200vh";
  door2.style.marginTop = "200vh";
  openButton.style.opacity = 0;
  bar.style.opacity=0;
  setTimeout(() => {
    door1.remove();
  }, 1000);
  setTimeout(() => {
    door2.remove();
    reloadScrollBars();
  }, 1000);
});

//unload and load scroll bar when doors open
function reloadScrollBars() {
  document.body.style.overflow = "auto";
  document.body.scroll = "yes";
}
function unloadScrollBars() {
  document.body.style.overflow = "hidden";
  document.body.scroll = "no";
}

//blinking "Press Me" button
setInterval(()=>{
  if(openButton.style.backgroundColor==="rgb(136, 8, 8)")
    openButton.style.backgroundColor='red';
  else
    openButton.style.backgroundColor='rgb(136, 8, 8)';
},1000);