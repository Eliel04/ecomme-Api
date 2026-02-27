fetch("https://dummyjson.com/products")
.then(res => {
    if (!res.ok) {
        throw new Error("Network issues")
    }
    return res.json();
})
.then(data => {
    data.products.forEach(package => {
        console.log(data);
        const box = document.createElement("div");
        box.className ="product-container";
        box.innerHTML = `
            <img src="${package.thumbnail}" alt="${package.title}" class="product-image">
            <h3><span class="product-title spanbox-description">Name:</span> ${package.title}</h3>
            <p><span class="product-category spanbox-description">Category:</span> ${package.category}</p>
            <p> <span class="product-price spanbox-description">Price:</span> $${package.price}</p>
            ${package.brand ? `<p> <span class="product-brand spanbox-description">Brand:</span> ${package.brand}</p>` : "Unknown Brand"}
            <div class="product-buttons">
             <button class="buy-now-btn"> Buy Now</button>
            <button class="add-to-cart-btn"> Add to Cart</button>
           </div>
        `;
        document.getElementById("container").appendChild(box);
    })
})
.catch(err => console.error(err));
