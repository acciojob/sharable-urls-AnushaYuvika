// your code here
document.getElementById("button").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let year = document.getElementById("year").value;

  let url = "https://localhost:8080/";

  if (name || year) {
    url += "?";
    if (name) {
      url += "name=" + name;
    }
    if (name && year) {
      url += "&";
    }
    if (year) {
      url += "year=" + year;
    }
  }

  document.getElementById("url").textContent = url;
});
