// window.onload = function () {
//   async function getAll() {
//     return fetch("https://fakestoreapi.com/products").then((res) => res.json());
//   }

//   async function get_data_api() {
//     const products = await getAll();
//     console.log(products);
//     const productsDiv = document.getElementById("products");
//     console.log(productsDiv);
//     for (let item of products) {
//       productsDiv.innerHTML += `
//           <div class="im" onclick="goToDetail(${item.id})">
//           <div class="im">
//           <p>${item.id}</p>
//           <p>${item.category}</p>
//           <h2>${item.title}</h2>
//           </div>
//           </div>
//           ;`;
//     }
//   }
//   get_data_api();
// };

// function goToDetail(id) {
//   window.location.assign(`details.html?id=${id}`);
// }

// async function login_status(event) {
//   if (username.value == "" || password.value == "") {
//     alert("can dien thong tin");
//   } else {
//     event.preventDefault();
//     let userinfo = await get_user();
//     if (userinfo.token)
//     {
//       window.location.assign(`web.html`);
//     } else {
//       alert('failed')
//     }
//   }
// }
async function login_status(event){
  if(username.value == "" || password.value==""){
    alert("wrong user name or password");
  }
  else {
    event.preventDefault();
    let userinfo = await get_user();
    if(userinfo.token){
      window.location.assign(`web.html`);
    } else{
      alert ('failed')
    }

  }
}

async function get_user() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let userinfo = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  console.log(userinfo);
  console.log(userinfo.token);
  localStorage.setItem('token',userinfo.token);
  localStorage.setItem('username',userinfo.username);
  return userinfo;
}
