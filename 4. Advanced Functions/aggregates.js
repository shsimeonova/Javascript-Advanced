function aggregates(input){
    function reduce(arr, func) {
        let result = arr[0];
        for (let element of arr.slice(1)){
            result = func(result, element);
        }
        return result;
    }
    console.log("Sum = " + reduce(input, (a,b) => Number(a)+Number(b)));
    console.log("Min = " + reduce(input, (a,b) => Math.min(a,b)));
    console.log("Max = " + reduce(input, (a,b) => Math.max(a,b)));
    console.log("Product = " + reduce(input, (a,b) => Number(a)*Number(b)));
    console.log("Join = " + reduce(input, (a,b) => a + b));
}
function processComamnds(commands) {
    let commandProcessor = (function () {
        let text = '';
        return {
            append: (newText) => text+=newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length-count),
            print: () => console.log(text)
        }
    })();
    for (let cmd of commands){
        let [commandType, argument] = cmd.split(' ');
        commandProcessor[commandType](argument);
    }
}
function maxElement(arr) {
    return Math.max.apply(null, arr);
}
