var flag = false;
var SIZE = 100;
var keyword = new Array();
var flag_arr = new Array();

function selected(o){
    var x = document.getElementById(o.id)
    //true : click
    if(!x.flag){
        x.style.backgroundColor="#188f85bd";
        x.flag = true;
    }
    //false : unclick
    else{
        x.style.backgroundColor="#ffffff13";
        x.flag = false;
    }
    keyword[x.getAttribute('name')] = x.id;
    flag_arr[x.getAttribute('name')] = x.flag;
}
isloading = {
    start: function() {
      if (document.getElementById('wfLoading')) {
        return;
      }
      var ele = document.createElement('div');
      ele.setAttribute('id', 'wfLoading');
      ele.classList.add('loading-layer');
      ele.innerHTML = '<span class="loading-wrap"><span class="loading-text"><span>.</span><span>.</span><span>.</span></span></span>';
      document.body.append(ele);
  
      // Animation
      ele.classList.add('active-loading');
    }
}
function send(){
    isloading.start();
    var str = null;
    for(var i=0; i<SIZE; i++){
        if(flag_arr[i] && str==null){
            str = keyword[i];
        }
        else if(flag_arr[i]){
            str += "," + keyword[i];
        }
    }
    key_str = str;
    setTimeout(function(){
        location.href="algorithm.html?" + key_str;}, 5000);
    
}



