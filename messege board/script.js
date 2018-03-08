window.onload = function () {
    var submit = document.getElementById("submit");
    var textin = document.getElementById("text");
    var list = document.getElementById("list");

    //创建一条留言
    function CreateComment(text,name) {
        //判断输入是否为空
        if (text == "") {
            alert("输入不能为空");
        } else {
            var li = document.createElement("li");
            li.innerHTML = text;
            //控制留言的样式
            if (list.children[0] && list.children[0].className == "odd") {
                li.className = "even";
            } else {
                li.className = "odd";
            }
            //删除按钮
            var del_btn = document.createElement("a");
            del_btn.href = "javascript:;";
            del_btn.className = "del";
            del_btn.id = name;
            del_btn.innerHTML = "%陈lao";

            del_btn.onclick = function () {
                var del_name = del_btn.id;
                localStorage.setItem(del_name,"null");
                list.removeChild(this.parentNode);
            };

            li.appendChild(del_btn);

            li.onmouseover = function () {
                del_btn.style.display = "block";
            };
            li.onmouseout = function () {
                del_btn.style.display = "none";
            };
            list.insertBefore(li, list.children[0]);
        }
    }
    //打开网页时加载保存的所有留言
    for (var i = 0; i < localStorage.length; ++i){
        var name = localStorage.key(i);
        var value = localStorage.getItem(name);
        if (value != "null") {
            CreateComment(value, name);
        }
    }
    //点击按钮时新建留言
    submit.onclick = function () {
        var date = new Date();
        CreateComment(textin.value,date);
        localStorage.setItem(date, textin.value);
        textin.value = "";
    };
}; 