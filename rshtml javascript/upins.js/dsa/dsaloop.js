function pattern3(n) {
    for (var i = n; i >= 1; i--) {
        var starscount = i;
        var spacescount = n - i;
        var s = "";
        for (var j = 1; j <= spacescount; j++) {
            s += " ";
        }
        for (var j = 1; j <= starscount; j++) {
            s += "*";
        }
        console.log(s);
    }
}
pattern3(5);

