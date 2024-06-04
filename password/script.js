function copyText(txt){
    navigator.clipboard.writeText(txt).then(
      () => {
        alert("Copied the best:" +txt);
      },
      ()=>{
        alert("Copied the text: ")
      }, 
    );
    
}




const deletePassword = (website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) => {
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Successfully deleted ${website}'s password`)
    showPasswords()
}


function maskPassword(pass){
    let str = ""
    for (let index=0;index<pass.length;index++){
        str += "*"
    }
    return str
}  



const showPasswords = () => {
    let td = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null || JSON.parse(data).length == 0) {
        td.innerHTML = "No data present"
    }
    else {
        tb.innerHTML = ` <tr>
        <th>website</th>
        <th>Username</th>
        <th>Password</th>
        <th>Delete</th>
    </tr>`
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];



            str += `<tr>
    <td>${element.website} <img onclick="copyText('${element.website}')" src="copy.svg" alt="Copy">  </td>
    <td>${element.username}<img nclick="copyText('${element.username}')" src="copy.svg" alt="Copy">
    </td>
    <td>${element.password}<img onclick="copyText('${element.password}')" src="copy.svg" alt="Copy">
    </td>
    <td><button class="btnsm" oneclick="deletePassword('${element.website}')">Delete<button></td>
          </tr>`
        }
        tb.innerHTML = tb.innerHTML + str


    }
    website.value = ""
    username.value = ""
    password.value = ""
}
console.log("working");
showPasswords()
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("click.........");
    console.log(website.value, username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("Password Saver");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("Password Saver");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPasswords()
})