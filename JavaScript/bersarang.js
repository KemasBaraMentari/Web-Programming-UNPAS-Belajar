var s = '';
for (var i = 0; i < 15; i++){
    for(var j = 0; j < 5; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

'\n\n';

var s = '';
for(var i = 0; i < 10; i++){
    for(var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

'\n\n';

var s = '';
for(var i = 10; i > 0; i--){
    for(var j = 0; j < i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

'\n\n';