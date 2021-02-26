// add the icon to every page;
const icon = document.createElement("link");
icon.setAttribute("href", "favicon.ico");
icon.setAttribute("rel", "shortcut icon");
icon.setAttribute("type", "image/x-icon");
document.head.appendChild(icon);

// add title according to page;
const devMode = true;
let endpoint;
if (devMode) {
  endpoint = window.location.pathname
    .slice("/tdsco-ceramics".length)
    .replace(".html", "")
    .replace("/", "");
} else {
  endpoint = window.location.pathname.replace(".html", "").replace("/", "");
}

function titleToPre(endpoint) {
  let titlePre =
    endpoint == "index" || endpoint == ""
      ? "Home"
      : endpoint == "catalog"
      ? "Catalog"
      : endpoint == "contact"
      ? "Contact us"
      : endpoint == "about"
      ? "About us"
      : "error";
  return titlePre;
}

let titlePre = titleToPre(endpoint);
const title = document.createElement("title");
title.innerHTML = `${titlePre} | TDS Company Ltd.`;
document.head.appendChild(title);

// utils

function _scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

function renderSizes(sizesArray, element, isSquare) {
  if (!isSquare) {
    sizesArray.forEach(([width, height]) => {
      element.innerHTML += `&#8709 ${width} x H ${height} cm`;
      element.appendChild(document.createElement("br"));
    });
  } else {
    sizesArray.forEach(([width, height]) => {
      element.innerHTML += `${width} x ${width} x H ${height} cm`;
      element.appendChild(document.createElement("br"));
    });
  }
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const sectionBody = document.querySelector("section.body");
