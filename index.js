let products = JSON.parse(localStorage.getItem('product')) || [];

const ui = (products) => {
  console.log(products);
  document.getElementById("ui").innerHTML=''
  products.map((product) => {
    let img = document.createElement("img");
    img.src = product.img;
    let title = document.createElement("h2");
    title.innerHTML = product.title;
    let price = document.createElement("h3");
    price.innerHTML = product.price;
    let category = document.createElement("p");
    category.innerHTML = product.category;
    let div = document.createElement("div");
    div.append(img, title, price, category);
    document.getElementById("ui").append(div);
  });
};


ui(products)
const productdata = (e) => {
  e.preventDefault();
  let product = {
    title: document.getElementById("title").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
  };
  products.push(product);
  localStorage.setItem("product", JSON.stringify(products));
  ui(products);
};

document.querySelector("form").addEventListener("submit", productdata);