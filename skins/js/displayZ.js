$(document).ready(function () {
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    var Request = new Object();
    Request = GetRequest();
    
    TID = Request['tid'];

    $.ajax({
        type: "POST",
        url: "test.json",
        dataType: "json",
        data:{tid: TID },  //向服务器传的团队id
        success: function(data){
            $('#CCC-production-content-works-Content').empty();
            var tInfo = eval("(" + data + ")");
            var html = ' ';
            html += "<p class='CCC-production-content-works-partnerListTitle'>团队名称:" + tInfo.tname + "</p>"
                 + "<img src=" + tInfo.tphoto + " />";
            $.each(tInfo.tmember, function (tIndex, tContent) {
                html += "<p>团员：" + tContent['member'] + "</p>";
            });
            html += "<p class='CCC-production-content-works-partnerListTitle'>团队简介：</p>"
                 + "<p>" + tInfo.intro + "</p>"
                 + "<p class='CCC-production-content-works-partnerListTitle'>荣获奖项：</p>"
                 + "<p>" + tInfo.prize + "</p>";
            $('#CCC-production-content-works-Content').html(html);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
});