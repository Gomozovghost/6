var i = 0,
M = 0;
var Max = 10;
var Space = "",
Star = "";
while (i < Max) {Space = ""; Star = ""; for (M = 0; M < Max - i; M++) Space += " "; for (M = 0; M < 2 * i + 1; M++) Star += "*"; console.log(Space + Star); i++;}