// Loop through arguments
// it can take any number of arguments


function loopThruArgs() {
    for (var i = 0, j = arguments.length; i < j; i++){
        console.log(arguments[i]+' ');
    }
    console.log('<br />');
}

loopThruArgs('apples', 'bananas', 'oranges');

