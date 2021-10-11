 //Submit Buttons
 const getIndexSubmit = document.getElementById('index-submit')
 const getNameSubmit = document.getElementById('name-submit')

 //inputs
 const indexInput = document.getElementById('index')
 const nameInput = document.getElementById('query-input')

//handle submits
getNameSubmit.addEventListener('click', () => {
    axios
        .get(`https://localhost:5502/api/users?friend=${nameInput.value}`)
        .then(res => addToView([res.data]))
})

getIndexSubmit.addEventListener('click', () => {
    axios
        .get(`https://localhost:5502/api/users/${indexInput.value}`)
        .then(res => addToView([res.data]))
})
 
 //GET Friends List
 document.getElementById("button").onclick = function () {
    axios
      .get("http://localhost:5502/api/users")
      .then(function (response) {
        const data = response.data;
        document.getElementById("people").innerHTML = data
          .map(function (person) {
            return '<li class="row">' + person;
          })
          .join("");
      })
      .catch(function (err) {
        document.getElementById("people").innerHTML =
          '<li class="text-danger">' + err.message + "</li>";
      });
  };

  //Filter by Name

  document.getElementById("index-submit").onclick = function () {
      axios
      .get("http://localhost:5502/api/users/")
  }
  //Gilter by Index