const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close_btn");

const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2").classList.toggle("active");
});
let products = [];
let editIndex = null;
// Show/Hide Modals
function openAddProductModal() {
  document.getElementById("addProductModal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Sort Products
function sortProductsTable(column) {
  console.log("Sorting by:", column);
}

// Search Products
function searchProduct(input) {
  const searchTerm = input.value.toLowerCase();
  console.log("Searching for:", searchTerm);
}

// Add Product
function addProduct() {
  console.log("Adding product...");
}
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".sidebar a");
  const contentSections = document.querySelectorAll(".content-section");

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();

      // Xóa trạng thái active khỏi tất cả các menu
      menuItems.forEach((item) => item.classList.remove("active"));

      // Thêm trạng thái active vào mục được nhấp
      menuItem.classList.add("active");

      // Ẩn tất cả các phần nội dung
      contentSections.forEach((section) => section.classList.remove("active"));

      // Hiển thị nội dung tương ứng
      const targetId = menuItem.textContent.trim().toLowerCase() + "Content";
      document.getElementById(targetId).classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const productDropdownBtn = document.querySelector(".dropdown-btn");
  const productSection = document.getElementById("productSection");

  productDropdownBtn.addEventListener("click", () => {
    if (productSection.style.display === "none") {
      productSection.style.display = "block";
    } else {
      productSection.style.display = "none";
    }
  });
});
function renderTable() {
  const tbody = document.getElementById("productTableBody");
  tbody.innerHTML = "";
  products.forEach((product, index) => {
    const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td><img src="${
                      product.image
                    }" alt="Product Image" class="image-preview" style="width: 50px; height: 50px;"></td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                    <td>
                        <button class="btn-edit" onclick="editProduct(${index})">Edit</button>
                        <button class="btn-delete" onclick="deleteProduct(${index})">Delete</button>
                    </td>
                </tr>
            `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const description = document.getElementById("productDescription").value;
  const image = document.getElementById("imagePreview").src;

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

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("imagePreview").src = "";
  document.getElementById("imagePreview").style.display = "none";

  renderTable();
}

function editProduct(index) {
  editIndex = index;
  const product = products[index];
  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productDescription").value = product.description;
  document.getElementById("imagePreview").src = product.image;
  document.getElementById("imagePreview").style.display = "block";
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}

function previewImage() {
  const file = document.getElementById("productImage").files[0];
  const preview = document.getElementById("imagePreview");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
  }
}
function toggleDropdown(event) {
  const dropdownContent =
    event.target.closest(".dropdown-btn").nextElementSibling;
  if (dropdownContent) {
    dropdownContent.classList.toggle("active"); // Thêm/lấy class `active`
  }
}

renderTable();

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Giả lập kiểm tra thông tin đăng nhập (thực tế nên kiểm tra qua API)
  if (username === "admin" && password === "1") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-section").style.display = "block";
    document.getElementById("admin-name").textContent = username;
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

function logout() {
  document.getElementById("admin-section").style.display = "none";
  document.getElementById("login-section").style.display = "block";
}

function addUser() {
  const userList = document.getElementById("user-list");
  const newUser = document.createElement("div");
  newUser.textContent = "Người dùng mới";
  userList.appendChild(newUser);
}

function addProduct() {
  const productList = document.getElementById("product-list");
  const newProduct = document.createElement("div");
  newProduct.textContent = "Sản phẩm mới";
  productList.appendChild(newProduct);
}

function filterOrders() {
  const orderList = document.getElementById("order-list");
  orderList.innerHTML = "<div>Đơn hàng đã được lọc</div>";
}

function showAnalytics() {
  const analyticsData = document.getElementById("analytics-data");
  analyticsData.innerHTML = "<div>Hiển thị thống kê kinh doanh</div>";
}
