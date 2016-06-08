var i = 0;
function run() {
    i = i + 1;
    postMessage(i+":"+Date.now());
}
setInterval(run,1000);