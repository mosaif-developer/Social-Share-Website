var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

const toggleMenu = ()=>{
   settingsMenu.classList.toggle("open-menu");
}
darkBtn.onclick = ()=>{
   darkBtn.classList.toggle("dark-btn-on");
   document.body.classList.toggle("dark-theme");

 // Here, when we refresh the website it still in same theme whatever we have set and it will update the local storage.

   if(localStorage.getItem("theme") == "light"){
      localStorage.setItem("theme", "dark");
   }
   else{
      localStorage.setItem("theme", "light");
   }
}

// Here, we are adding/removing the dark/light theme.

if(localStorage.getItem("theme") == "light"){
   darkBtn.classList.remove("dark-btn-on");
   document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
   darkBtn.classList.add("dark-btn-on");
   document.body.classList.add("dark-theme");
}
else{
   localStorage.setItem("theme", "dark");
}