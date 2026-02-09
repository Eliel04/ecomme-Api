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
        box.innerHTML = `
            <img src="${package.thumbnail}" alt="${package.title}">
            <h3><span class=product-title>Name:</span> ${package.title}</h3>
            <p>Price: $${package.price}</p>
            ${package.brand ? `<p>Brand: ${package.brand}</p>` : "Unknown Brand"}
            <button> Delete</button>
            <button> Buy Now</button>
        `;
        document.getElementById("container").appendChild(box);
    })
})
.catch(err => console.error(err));
