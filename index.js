function receivesAFunction (spy) {
    spy()
}

function returnsANamedFunction(){
    function Run (){
        
    }
    return (Run)

}

function returnsAnAnonymousFunction(){
    return function () {

    }
    
}