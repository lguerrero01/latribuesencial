window.onload = function () {
  document.form.addEventListener('submit', validarFormulario);
}

async function postData() {
  let formData = new FormData();
  formData.append('email', document.getElementById("email").value);
  formData.append('name', document.getElementById("name").value);
  formData.append('country', document.getElementById("country").value);
  formData.append('resCountry', document.getElementById("resCountry").value);
  formData.append('phone', document.getElementById("phone").value);

  fetch('register.php', {
      method: 'post',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.status !== 200) {
        document.getElementById("errorMsg").innerHTML = data.msg;
        document.getElementById("errorMsg").classList.add('alert-danger');
        return data.msg
      } else {
        document.getElementById("errorMsg").innerHTML = '!!Su registro fue enviado!!';
        document.getElementById("errorMsg").classList.add('alert-success');
        setTimeout("redireccionarPagina()", 5000);
        return data.status
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function hideError() {
  document.getElementById("errorMsg").classList.remove('alert-danger');
  document.getElementById("errorMsg").classList.remove('alert-success');
  document.getElementById("errorMsg").innerHTML = '';
}

function redireccionarPagina() {
  window.location.replace("https://911autopartes.com/");
}

// get the actual year and start subtracting till 1900
var start = 1900;
var end = new Date().getFullYear();
var options = "";
for (var year = end; year >= start; year--) {
  options += "<option>" + year + "</option>";
}
document.getElementById("carYear").innerHTML = options;


function validarFormulario(evObject) {
  evObject.preventDefault();

  var validForm = true;
  var form = document.form;

  for (var i = 0; i < form.length; i++) {
    if (form[i].type == 'text') {
      if (form[i].value == null || form[i].value.length == 0 || /^\s*$/.test(form[i].value)) {
        alert(form[i].name + ' no puede estar vac??o o contener s??lo espacios en blanco');
        validForm = false;
      }
    }
  }

  if (validForm === true) {
    postData()
  }
}