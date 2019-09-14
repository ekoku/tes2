function is_username(username){
  var lowercaseRe = /[a-z]/g;
  var uppercaseRe = /[A-Z]/g;
  var numberRe = /[0-9]/g;

  if (username.lenght = 5
    && lowercaseRe.test(username)
    && uppercaseRe.test(username)
    && numberRe.test(username)) {
    return true;
}
  return false;
}

function is_password(password){
  var lowercaseRe = /[a-z]/g;
  var uppercaseRe = /[A-Z]/g;
  var numberRe = /[0-9]/g;
  var specialRe=/[_@#$%!]/g;
  var khusus=/[@]/g;

  if (password.lenght = 8
    && lowercaseRe.test(password)
    && uppercaseRe.test(password)
    && numberRe.test(password)
    && specialRe.test(password)
    && khusus.test(password)) {
    return true;
    }
  return false;
}

console.log(is_username('@najibb')?'true':'false');
console.log(is_username('A99v')?'true':'false');
console.log(is_password('p@ssW0rd#')?'true':'false');
console.log(is_password('DumbW4ysDev99!#')?'true':'false');
