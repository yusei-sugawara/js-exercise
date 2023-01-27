var Ryogae = function(price) {
    this.price = price;
}

Ryogae.prototype.calculate = function() {
    const SUM = this.price;
    const N_LIMIT = 15;
    var count = 0;
    var flag = 0;
    for(var n500 = 0; n500 <= Math.floor(SUM/500); n500++) {
        for(var n100 = 0; n100 <= Math.floor(SUM/100) ; n100++) {
            for(var n50 = 0; n50 <= Math.floor(SUM/50) ; n50++) {
                for(var n10 = 0; n10 <= Math.floor(SUM/10) ; n10++) {
                    var sum = 0;
                    var n = 0;
                    sum = n500 * 500 + n100 * 100 + n50 * 50 + n10 * 10;
                    n = n500 + n100 + n50 + n10;
                    if(sum > SUM || n > N_LIMIT) {
                        break;
                    }
                    if(sum == SUM) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

document.addEventListener('DOMContentLoaded', function() {
    var btn2 = document.getElementById('btn2');
    var del2 = document.getElementById('del2');
    btn2.addEventListener('click', function() {
        var ryogae = new Ryogae(1000);
        var answer = ryogae.calculate();
        var text = document.createTextNode(String(answer));
        document.getElementById('result2').appendChild(text);
        btn2.disabled = true;
        del2.disabled = false;
    })
    del2.addEventListener('click', function() {
        const node = document.getElementById("result2");
        while(node.firstChild){
        node.removeChild(node.firstChild);
        }
        btn2.disabled = false;
        del2.disabled = true;
    })
})