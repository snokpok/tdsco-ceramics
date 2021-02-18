function _scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}
function sizeRender(sizesArray, element) {
  sizesArray.forEach(([width, height]) => {
    element.innerHTML += `∅ ${width} H ${height}`;
    element.appendChild(document.createElement("br"));
  });
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const sectionBody = document.querySelector("section.body");