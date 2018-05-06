function kontrolEt()
{
    var username = document.getElementById("kullanici").value;
    var password = document.getElementById("sifre").value;

    if (username == "" || password == "")
    {
        alert("Lütfen boş alanları doldurunuz.");
    }
    else if (username == "root" & password == "1234") {
        alert("Giriş Başarılı");
        window.location.href = "anasayfa.html";
    } 
    
    else {
        alert("Yanlış kullanıcı adı veya şifre");
    }
}

function kayitOl()
{
    var email = document.getElementById("email").value;
    var username = document.getElementById("kullanici").value;
    var password = document.getElementById("password").value;
    var tpass = document.getElementById("tpass").value;

    if (email == "" || username == "" || password == "" || tpass == "")
    {
        alert("Lütfen boş alanları doldurunuz.");
    }

    else if (password != tpass)
    {
        alert("Şifreler uyuşmuyor");
    }

    else
    {
        alert("Başarıyla kayıt oldunuz");

        document.getElementById("email").value = "";
        document.getElementById("kullanici").value = "";
        document.getElementById("password").value = "";
        document.getElementById("tpass").value = "";
    }
}

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("customers.json").then(function (response) {
      $scope.myData = response.data.records;
  });
});