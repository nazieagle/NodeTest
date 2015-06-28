process.on('SIGINT',function(){
    //process.exit();
    console.log('我就不自杀');
});

process.stdin.on('data', function (data) {

})