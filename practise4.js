//let a = document.getElementById("number")
//let b = document.getElementById("name")
function submit() {
  let a = document.getElementById("number").value;
  let b = document.getElementById("name").value;
  let c = document.getElementById("address").value;
  console.log(a);
  debugger
  if (a.lenth !== 10 && a==="") {
    document.getElementById("numerror").innerHTML =
      "*minimum 10 digit required";
  }
  if (b === "") {
    document.getElementById("namerror").innerHTML = "*name is required";
  }
  if (c === "") {
    document.getElementById("flaterror").innerHTML = "*address is required";
  } if(a.length===10 && b!=="" && c!=="") {
    alert("your form is submitted");
    window.location.href = "https://www.google.com/";
   
  }
}
