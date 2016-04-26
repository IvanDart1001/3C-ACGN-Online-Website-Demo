function addElementDiv(obj) {
    var parent = document.getElementById(obj);
    var div = document.createElement("div");
    div.setAttribute("class", "CCC-activityPublish-Block");
    div.innerHTML = "<select name='style' class='form-control CCC-activityPublish-select' style='margin-left:105px;'><option value=''>团队职务</option><option value='leader'>团长</option><option value='member'>组员</option><option value='cameraman'>摄影</option><option value='customizer'>化妆</option><option value='npc'>场务</option><option value='other'>其他</option></select><div class='form-group CCC-activityPublish-Block-Container  CCC-group-text'><form style='float:left'><input type='text' id='CCC-groupN' class='form-control CCC-activityPublish-input' /><span id='CCC-groupN-AT' class='CCC-activityPublish-inputPriceTag'>@</span></form><button class='CCC-groupDEL-btn' onclick='cls(this)'>x</button></div>";
    parent.appendChild(div);
}

function cls(ob) {
    ob.parentNode.parentNode.parentNode.removeChild(ob.parentNode.parentNode);
}