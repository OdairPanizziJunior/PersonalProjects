
    function generatePassword() {
      var length = document.getElementById("length").value;
      var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:<>,.?/";
      var password = "";
      for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      document.getElementById("password").value = password;
    }
