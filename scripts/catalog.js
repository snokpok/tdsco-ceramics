const products = {
  indoor: {
    fiber: [
      {
        name: "Product 1",
        size: "Size 1",
        description: "Some description",
      },
    ],
    ceramics: [
      {
        name: "Indoor Ceramics 1",
        size: "Size 1",
        description: "Some description as well",
        // src = "../images/products/indoor-ceramics-1.jpg"
      },
    ],
  },
  outdoor: {
    fiber: [{ name: "yikes" }],
  },
};



const sectionBody = document.querySelector("section.body");
for (let categoryName of Object.keys(products)) {
  const categoryDiv = document.createElement("div");
  categoryDiv.setAttribute("class", "category");
  const heading = document.createElement("h1");
  heading.setAttribute("class", "heading");
  heading.innerHTML = categoryName.toUpperCase();

  categoryDiv.appendChild(heading);
  for (let subcategoryName of Object.keys(products[categoryName])) {
    const subcategoryDiv = document.createElement("div");
    subcategoryDiv.setAttribute("class", "subcategory");
    const subheading = document.createElement("h3");
    subheading.setAttribute("class", "subheading");
    subheading.innerHTML = subcategoryName.toUpperCase();

    const productsContainerDiv = document.createElement("div");
    productsContainerDiv.setAttribute("class", "products-container");

    for (let i = 0; i < products[categoryName][subcategoryName].length; i++) {

      const productObject = products[categoryName][subcategoryName][i];

      const productDiv = document.createElement("div");
      productDiv.setAttribute("class", "product");
      const productImage = document.createElement("img");
      productImage.setAttribute("class", "product-image");
      productImage.setAttribute("src", `../images/products/${categoryName}/${subcategoryName}/${i+1}.PNG`);
      const productTitle = document.createElement("h4");
      productTitle.setAttribute("class", "product-title");
      productTitle.innerHTML = productObject.name;
      const productDescription = document.createElement("p");
      productDescription.setAttribute("class", "product-description");
      productDescription.innerHTML = productObject.description;

      productDiv.appendChild(productImage);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(productDescription);

      productsContainerDiv.appendChild(productDiv);
    }
    subcategoryDiv.appendChild(subheading);
    subcategoryDiv.appendChild(productsContainerDiv);
    categoryDiv.appendChild(subcategoryDiv);
  }
  sectionBody.appendChild(categoryDiv);
}
