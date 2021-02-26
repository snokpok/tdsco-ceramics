// add the icon to every page;
const icon = document.createElement("link");
icon.setAttribute("href", "favicon.ico");
icon.setAttribute("rel", "shortcut icon");
icon.setAttribute("type", "image/x-icon");
document.head.append(icon);

// add title according to page;
const productionDomains = [
  "www.tdsco-ceramic.vn",
  "tdsco-ceramic.vn",
  "tdsco-ceramic.com",
];
const { hostname, pathname } = window.location;

const devMode = !productionDomains.includes(hostname);
let endpoint;
if (devMode) {
  endpoint = pathname
    .slice("/tdsco-ceramics".length)
    .replace(".html", "")
    .replace("/", "");
} else {
  endpoint = pathname.replace(".html", "").replace("/", "");
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
document.head.append(title);

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
      element.append(document.createElement("br"));
    });
  } else {
    sizesArray.forEach(([width, height]) => {
      element.innerHTML += `${width} x ${width} x H ${height} cm`;
      element.append(document.createElement("br"));
    });
  }
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const sectionBody = document.querySelector("section.body");
