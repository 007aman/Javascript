a={}
if (a)
{
    console.log('I am truly');
}
else
{
    console.log('I am falsy');
}

//Get false in these condition
// false
// 0(zero)
// -0
// 0n (Bigint)
// '', "", `` (empty string)
// null
// undefined
// NaN

//Get truly in these condition
// []
// {}
// ' ' 

(function () {
    if ((-100 && 100 && "0") || [] === true || 0) {
        console.log('1') //#1
        if ([] || (0 && false)) {
            console.log(2); //#2
        }

        if (Infinity && NaN && "false") {
            console.log(3);  //#3
            if ("") {
                console.log(4); //#4
            }
        } else {
            console.log(5); //#5
            if (({} || false === "") && !(null && undefined)) {
                console.log(6); //#6
            }
        }
    }
})();