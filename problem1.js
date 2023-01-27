var FizzBuzz = function(limit) {
    this.limit = limit;
}

FizzBuzz.prototype.show = function() {
    var result = [];
    for(var i = 1; i <= this.limit; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                result.push('FizzBuzz')
            } else {
                result.push('Fizz')
            }
        } else {
            if (i % 5 === 0) {
                result.push('Buzz')
            } else {
                result.push(String(i))
            }
        }
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn');
    var del = document.getElementById('del');
    btn.addEventListener('click', function() {
        fizzBuzz = new FizzBuzz(100);
        numArray = fizzBuzz.show();

        var frag = document.createDocumentFragment();
        for(var i = 0, len = numArray.length; i<len; i++){
            var text = document.createTextNode(numArray[i]);
            var br = document.createElement('br');
            frag.appendChild(text);
            frag.appendChild(br);
        }
        document.getElementById('result').appendChild(frag);

        btn.disabled = true;
        del.disabled = false;
    })
    del.addEventListener('click', function() {
        const node = document.getElementById("result");
        while(node.firstChild){
        node.removeChild(node.firstChild);
        }
        btn.disabled = false;
        del.disabled = true;
    })
})