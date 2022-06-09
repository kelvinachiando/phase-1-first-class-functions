function receivesAFunction (callback) {
    callback()
}

function returnsANamedFunction(){
    function play (){}
       return play 

}

function returnsAnAnonymousFunction(){
    return function (){}
    
}