var count = 1

function addElementDiv(obj) {
    var parent = document.getElementById(obj);
    var div = document.createElement("div");
    div.setAttribute("class", "CCC-activityPublish-Block");
    div.innerHTML = "<select name='MemberJob" + count + "' class='form-control CCC-activityPublish-select' style='margin-left:105px;'><option value=''>团队职务</option><option value='leader'>团长</option><option value='member'>组员</option><option value='cameraman'>摄影</option><option value='customizer'>化妆</option><option value='npc'>场务</option><option value='other'>其他</option></select><div class='form-group CCC-activityPublish-Block-Container  CCC-group-text'><input name='MemberID" + count + "' type='text' id='CCC-groupN' class='form-control CCC-activityPublish-input' /><span id='CCC-groupN-AT' class='CCC-activityPublish-inputPriceTag'>@</span><button class='CCC-groupDEL-btn' type='button' onclick='cls(this)'>x</button></div>";
    count++;
    parent.appendChild(div);
}

function cls(ob) {
    count--;
    ob.parentNode.parentNode.parentNode.removeChild(ob.parentNode.parentNode);
}