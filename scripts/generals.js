// dynamically sizing the background to the section body
const background = document.querySelector(".background")

background.style.minHeight = (sectionBody.offsetHeight+100) + "px";
console.log(background.style.minHeight)

// add footer
const footer = document.createElement("footer")
footer.innerHTML = "© Copyright 2020 - TDSCO Ltd."
document.body.appendChild(footer);