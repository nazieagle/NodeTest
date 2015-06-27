var http=require('http');

var server=http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    var url=req.url;

    var urlObj={};
    if(url.indexOf('?')>0){
        var urls=url.split('?');
        var pathname = urls[0];
        var queries=urls[1].split('&');
        queries.forEach(function (query) {
            var q=query.split('=');
            urlObj[q[0]]=q[1];
        })

    }

    if(pathname=='/menu'){
        res.end('菜单');
    }else if(pathname == '/leg'){
        res.end('客官，鸡腿饭'+urlObj['num']+'份来了 。');
    }

});
server.listen(3000,'localhost', function () {
    console.log('server listening')
});