let products = [];
    let editIndex = null;

    function renderTable() {
        const tbody = document.getElementById('productTableBody');
        tbody.innerHTML = '';
        products.forEach((product, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td><img src="${product.image}" alt="Product Image" class="image-preview" style="width: 50px; height: 50px;"></td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                    <td>
                        <button class="btn-edit" onclick="editProduct(${index})">Edit</button>
                        <button class="btn-delete" onclick="deleteProduct(${index})">Delete</button>
                    </td>
                </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', row);
        });
    }

    function addProduct() {
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const description = document.getElementById('productDescription').value;
        const image = document.getElementById('imagePreview').src;
        
        if (!name || !price || !description || !image) {
            alert("Please fill out all fields and select an image.");
            return;
        }

        if (editIndex !== null) {
            products[editIndex] = { name, price, description, image };
            editIndex = null;
        } else {
            products.push({ name, price, description, image });
        }
        
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productImage').value = '';
        document.getElementById('imagePreview').src = '';
        document.getElementById('imagePreview').style.display = 'none';
        
        renderTable();
    }

    function editProduct(index) {
        editIndex = index;
        const product = products[index];
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('imagePreview').src = product.image;
        document.getElementById('imagePreview').style.display = 'block';
    }

    function deleteProduct(index) {
        products.splice(index, 1);
        renderTable();
    }

    function previewImage() {
        const file = document.getElementById('productImage').files[0];
        const preview = document.getElementById('imagePreview');
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            preview.src = '';
            preview.style.display = 'none';
        }
    }

    renderTable();