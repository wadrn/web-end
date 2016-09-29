/**
 * Created by dongruining on 16/6/15.
 */
window.onload = function(){
    var oClock = document.getElementById("clock");
    var oSpan = oClock.getElementsByTagName("span");
    setInterval(getTimes,1000);
    getTimes();
    function getTimes(){
        var oDate = new Date();
        var aDate = [oDate.getHours(),oDate.getMinutes(),oDate.getSeconds()];
        for(var i in aDate){
            oSpan[i].innerHTML = format(aDate[i]);
        }
    }
    function format(a){
        return a.toString().replace(/^(\d)$/,"0$1");
    }
    for(var i =0 ;i<oSpan.length;i++){

    }
}
