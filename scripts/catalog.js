for (let categoryName in products) {
  const categoryDiv = document.createElement("div");
  categoryDiv.setAttribute("class", "category");
  categoryDiv.setAttribute("id", categoryName);
  const heading = document.createElement("h1");
  heading.setAttribute("class", "heading");
  heading.innerText = categoryName.capitalize();

  categoryDiv.appendChild(heading);
  for (let subcategoryName in products[categoryName]) {
    const subcategoryDiv = document.createElement("div");
    subcategoryDiv.setAttribute("class", "subcategory");
    const subheading = document.createElement("h3");
    subheading.setAttribute("class", "subheading");
    subheading.innerText = subcategoryName.capitalize();

    const productsContainerDiv = document.createElement("div");
    productsContainerDiv.setAttribute("class", "products-container");

    for (let i = 0; i < products[categoryName][subcategoryName].length; i++) {
      const productObject = products[categoryName][subcategoryName][i];

      const productDiv = document.createElement("div");
      productDiv.setAttribute("class", "product");
      const productImage = document.createElement("img");
      productImage.setAttribute("class", "product-image");
      productImage.setAttribute(
        "src",
        `images/catalog/${categoryName}/${subcategoryName}/${productObject.name}.PNG`
      );
      const productTitle = document.createElement("h4");
      productTitle.setAttribute("class", "product-title");
      productTitle.innerText = productObject.name;

      const productSize = document.createElement("h5");
      productSize.setAttribute("class", "product-size");

      if (productObject.sizes) {
        renderSizes(productObject.sizes, productSize, productObject.isSquare);
      }

      const productDescription = document.createElement("p");
      productDescription.setAttribute("class", "product-description");
      if (productObject.description) {
        productDescription.innerText = productObject.description;
      }
      productDiv.appendChild(productImage);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(productSize);
      productDiv.appendChild(productDescription);

      productsContainerDiv.appendChild(productDiv);
    }
    subcategoryDiv.appendChild(subheading);
    subcategoryDiv.appendChild(productsContainerDiv);
    categoryDiv.appendChild(subcategoryDiv);
  }
  sectionBody.appendChild(categoryDiv);
}

const hashId = location.hash;
if (hashId) {
  const hashDiv = document.querySelector(hashId);
  hashDiv.scrollIntoView(true);
  _scrollTo(hashId, -100);
}
