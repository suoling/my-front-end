function a () {
    var i = 1;
    return function () {
        console.log(++i)
    }
}

var c = a();
c()