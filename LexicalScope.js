let b = 10;
function a() {
    c();
    function c()
    {
        console.log(b);
    }
}
a();

console.log(b)

//Lexical means => Heirarchy or in a sequence
//Lexical env is local memory along with its parent.