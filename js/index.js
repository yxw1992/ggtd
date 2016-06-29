$(document).ready(function(e) {
    $(".nav-li h3").mouseover(function() {
        $(".nav-list").slideDown();
    });
    $(".up1").click(function() {
        $(".nav-list").slideUp();
    });
    $(".nav-ul #pp1").mouseover(function() {
        $(".nav-ul #pp1 ul ").show();
    })
    $(".nav-ul #pp1").mouseout(function() {
        $(".nav-ul #pp1 ul ").hide();
    })
    $(".nav-ul #pp2").mouseover(function() {
        $(".nav-ul #pp2 ul ").show();
    })
    $(".nav-ul #pp2").mouseout(function() {
        $(".nav-ul #pp2 ul ").hide();
    })
    $(".nav-ul #pp3").mouseover(function() {
        $(".nav-ul #pp3 ul ").show();
    })
    $(".nav-ul #pp3").mouseout(function() {
        $(".nav-ul #pp3 ul ").hide();
    })
    $(".nav-ul #pp4").mouseover(function() {
        $(".nav-ul #pp4 ul ").show();
    })
    $(".nav-ul #pp4").mouseout(function() {
        $(".nav-ul #pp4 ul ").hide();
    })
    $(".nav-ul #pp5").mouseover(function() {
        $(".nav-ul #pp5 ul ").show();
    })
    $(".nav-ul #pp5").mouseout(function() {
        $(".nav-ul #pp5 ul ").hide();
    })
    $(".nav-ul #pp6").mouseover(function() {
        $(".nav-ul #pp6 ul ").show();
    })
    $(".nav-ul #pp6").mouseout(function() {
        $(".nav-ul #pp6 ul ").hide();
    })
    $(".nav-ul #pp7").mouseover(function() {
        $(".nav-ul #pp7 ul ").show();
    })
    $(".nav-ul #pp7").mouseout(function() {
        $(".nav-ul #pp7 ul ").hide();
    })
});
$(document).ready(function(e) {
    //首页幻灯片      
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(obj) {
            var owner = this,
                args = Array.prototype.slice.call(arguments),
                callobj = Array.prototype.shift.call(args);
            return function(e) {
                e = e || top.window.event || window.event;
                owner.apply(callobj, args.concat([e]));
            };
        };
    };
    var banner_tabs = function(id) {
        this.ctn = document.getElementById(id);
        this.adLis = null;
        this.btns = null;
        this.animStep = 0.2; //动画速度0.1～0.9
        this.switchSpeed = 3; //自动播放间隔(s)
        this.defOpacity = 1;
        this.tmpOpacity = 1;
        this.crtIndex = 0;
        this.crtLi = null;
        this.adLength = 0;
        this.timerAnim = null;
        this.timerSwitch = null;
        this.init();
    };
    banner_tabs.prototype = {
        fnAnim: function(toIndex) {
            if (this.timerAnim) {
                window.clearTimeout(this.timerAnim);
            }
            if (this.tmpOpacity <= 0) {
                this.crtLi.style.opacity = this.tmpOpacity = this.defOpacity;
                this.crtLi.style.filter = 'Alpha(Opacity=' + this.defOpacity * 100 + ')';
                this.crtLi.style.zIndex = 0;
                this.crtIndex = toIndex;
                return;
            }
            this.crtLi.style.opacity = this.tmpOpacity = this.tmpOpacity - this.animStep;
            this.crtLi.style.filter = 'Alpha(Opacity=' + this.tmpOpacity * 100 + ')';
            this.timerAnim = window.setTimeout(this.fnAnim.bind(this, toIndex), 50);
        },
        fnNextIndex: function() {
            return (this.crtIndex >= this.adLength - 1) ? 0 : this.crtIndex + 1;
        },
        fnSwitch: function(toIndex) {
            if (this.crtIndex == toIndex) {
                return;
            }
            this.crtLi = this.adLis[this.crtIndex];
            for (var i = 0; i < this.adLength; i++) {
                this.adLis[i].style.zIndex = 0;
            }
            this.crtLi.style.zIndex = 2;
            this.adLis[toIndex].style.zIndex = 1;
            for (var i = 0; i < this.adLength; i++) {
                this.btns[i].className = '';
            }
            this.btns[toIndex].className = 'cur'
            this.fnAnim(toIndex);
        },
        fnAutoPlay: function() {
            this.fnSwitch(this.fnNextIndex());
        },
        fnPlay: function() {
            this.timerSwitch = window.setInterval(this.fnAutoPlay.bind(this), this.switchSpeed * 1000);
        },
        fnStopPlay: function() {
            window.clearTimeout(this.timerSwitch);
        },
        init: function() {
            this.adLis = this.ctn.getElementsByTagName('li');
            this.btns = this.ctn.getElementsByTagName('cite')[0].getElementsByTagName('span');
            this.adLength = this.adLis.length;
            for (var i = 0, l = this.btns.length; i < l; i++) {
                with({
                    i: i
                }) {
                    this.btns[i].index = i;
                    this.btns[i].onclick = this.fnSwitch.bind(this, i);
                    this.btns[i].onclick = this.fnSwitch.bind(this, i);
                }
            }
            this.adLis[this.crtIndex].style.zIndex = 2;
            this.fnPlay();
            this.ctn.onmouseover = this.fnStopPlay.bind(this);
            this.ctn.onmouseout = this.fnPlay.bind(this);
        }
    };
    var player1 = new banner_tabs('banner_tabs');
});
//结束
function switchmodTag() {}
switchmodTag.prototype = {
    st: function(menus, divs, openClass, closeClass) {
        var _this = this;
        if (menus.length != divs.length) {
            alert("菜单层和内容层数量不一样!");
            return false;
        }
        for (var i = 0; i < menus.length; i++) {
            _this.$(menus[i]).value = i;
            _this.$(menus[i]).onmouseover = function() { //此行onmouseover 可以改成onclick。
                for (var j = 0; j < menus.length; j++) {
                    _this.$(menus[j]).className = closeClass;
                    _this.$(divs[j]).style.display = "none";
                }
                _this.$(menus[this.value]).className = openClass;
                _this.$(divs[this.value]).style.display = "block";
            }
        }
    },
    $: function(oid) {
        if (typeof(oid) == "string") return document.getElementById(oid);
        return oid;
    }
}
window.onload = function() {
    var STmodel = new switchmodTag();
    STmodel.st(["a_0", "b_0", "c_0", "d_0"], ["a_1", "b_1", "c_1", "d_1"], "tel_01", "tel_02");
    STmodel.st(["a", "b", "c"], ["a1", "b1", "c1"], "st01", "st02");
    STmodel.st(["d", "e", "f", "g", "h", "i"], ["d1", "e1", "f1", "g1", "h1", "i1"], "st01", "st02");
    STmodel.st(["j", "k", "l", "m", "n", "o"], ["j1", "k1", "l1", "m1", "n1", "o1"], "st01", "st02");
}