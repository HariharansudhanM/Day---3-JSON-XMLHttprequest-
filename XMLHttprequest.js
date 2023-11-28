var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  let result = JSON.parse(request.response);
  console.log(result);
};

for (const key in result) {
  console.log(
    result["Flags"],
    result["Continents"],
    result["region"],
    result["subregion"],
    result["population"]
  );
}
