

function sendRequest ( u )
           {
               var obj = $.ajax({url:u,async:false});
                var result=$.parseJSON(obj.responseText);
                return result;
           }//end of sendrequest



function addUser(){

            var fname = encodeURI(document.getElementById("fname").value);
            var lname = encodeURI(document.getElementById("lname").value);
            var uname = encodeURI(document.getElementById("uname").value);
            var pword = encodeURI(document.getElementById("pword").value);
            var email = encodeURI(document.getElementById("email").value);
            var pnum = encodeURI(document.getElementById("pnum").value);
             var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=1&fname="+fname+"&lname="+lname+"&uname="+uname+"&pword="+pword+"&email="+email+"&pnum="+pnum;
               var obj = sendRequest ( url );
               location.href = "index.html";
              
     }

function login(){
    var uname = encodeURI(document.getElementById("uname").value);
          var pword = encodeURI(document.getElementById("pword").value);
            var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=2&uname="+uname+"&pword="+pword;
               var obj = sendRequest ( url );
               if(obj.result==1){
               location.href = "dashboard.html";

           }
}
function login1(){
    var uname = encodeURI(document.getElementById("uname").value);
          var pword = encodeURI(document.getElementById("pword").value);
            var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=2&uname="+uname+"&pword="+pword;
               var obj = sendRequest ( url );
               if(obj.result==1){
               location.href = "../../dashboard.html";
           }
}
function getUserDetails(){
  var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=3";
               var obj = sendRequest ( url );
               if(obj.result==1){
                $('.hidden-xs').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
                  $('#sidepanelname').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
                  $('#useroptions').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
                  $('#profileheader').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
            
  }
}
function getUserDetails1(){
  var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=3";
               var obj = sendRequest ( url );
               if(obj.result==1){
                $('.hidden-xs').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
                  $('#sidepanelname').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
                  $('#useroptions').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
                  $('#profileheader').html(""+obj.userdetails[0].firstname+" "+obj.userdetails[0].lastname);
            
  }
}

function signout(){
   var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=4";
               var obj = sendRequest ( url );
       
}

function addEvent(){

            var title = encodeURI(document.getElementById("eTitle").value);
            var des = encodeURI(document.getElementById("eDescription").value);
            var date = encodeURI(document.getElementById("eDate").value);
            var venue = encodeURI(document.getElementById("eVenue").value);
            var time = encodeURI(document.getElementById("eTime").value);
             var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=5&title="+title+"&description="+des+"&date="+date+"&venue="+venue+"&time="+time;
               var obj = sendRequest ( url );
            displayPostedEvents();

}

function displayEvents(){
   var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=6";
               var obj = sendRequest ( url );
        var i = 0;
        var panel ="";
        if(obj.result== 1){
        for(;i<obj.events.length; i++){
          panel = panel + "<a onclick ='displayEventDetails("+obj.events[i].id+")'data-toggle='modal' data-target='#myModal'><div class='col-md-9'> <div class='info-box'><span class='info-box-icon bg-aqua'><i class='fa fa-envelope-o'></i></span><div class='info-box-content'><span class='info-box-number'>"+obj.events[i].eventname+"</span><span class='info-box-text'>"+obj.events[i].date+"  "+obj.events[i].time+"<span style='float:right'>Category</span></span></div></div></div></a>";
        }
        $(".content").html(panel);
      }
       else{
        $(".content").html("400 error");
       }
}

function displayEventDetails(id){
   var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=7&id="+id;
               var obj = sendRequest ( url );
               if(obj.result== 1){
                $("#myModalLabel").html("<b>"+obj.eventdetails[0].eventname+"</b>");
                $("#desDescription").html("<div><b>Description</b></div><div>"+obj.eventdetails[0].eventdescription+"</div>");
                $("#desVenue").html("<div><b>Venue</b></div><div>"+obj.eventdetails[0].venue+"</div>");
                $("#desDate").html("<div><b>Date</b></div><div>"+obj.eventdetails[0].date+"</div>");
                $("#desTime").html("<div><b>Time</b></div><div>"+obj.eventdetails[0].time+"</div>");
                 $(".modal-footer").html(" <button type='button' onclick='goEvent("+obj.eventdetails[0].id+")' class='btn btn-primary'>Going</button>");

               }

        
}

function goEvent(id){
var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=8&id="+id;
var obj = sendRequest ( url );
}


function displayEventsToGo(){
 var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=10";
               var obj = sendRequest ( url );
        var i = 0;
        var panel ="";
        if(obj.result== 1){
        for(;i<obj.goingToEvents.length; i++){

          panel = panel + "<div class='post'><div class='user-block'><span class='username'><a href='#'>"+obj.goingToEvents[i].eventname+"</a><a href='#' class='pull-right btn-box-tool'><i class='fa fa-times'></i></a></span> <span class='description'>"+obj.goingToEvents[i].date+" - "+obj.goingToEvents[i].time+"</span></div><p>"+obj.goingToEvents[i].eventdescription+"</p><ul class='list-inline'> <li><a href='#' class='link-black text-sm'><i class='fa fa-share margin-r-5'></i> Share</a></li><li><a href='#' class='link-black text-sm'><i class='fa fa-thumbs-o-up margin-r-5'></i> Like</a></li><li class='pull-right'><a href='#' class='link-black text-sm'><i class='fa fa-comments-o margin-r-5'></i> 5 people going</a></li></ul></div>";

        }
        $("#activity").html(panel);

                   
}
}

function displayPostedEvents(){
 var url = "http://cs.ashesi.edu.gh/~csashesi/class2016/george-assan/android/aerophp/user_controller1.php?cmd=9";
               var obj = sendRequest ( url );
        var i = 0;
        var panel ="";
        if(obj.result== 1){
        for(;i<obj.postedEvents.length; i++){

          panel = panel + "<div class='post'><div class='user-block'><span class='username'><a href='#'>"+obj.postedEvents[i].eventname+"</a><a href='#' class='pull-right btn-box-tool'><i class='fa fa-times'></i></a></span> <span class='description'>"+obj.postedEvents[i].date+" - "+obj.postedEvents[i].time+"</span></div><p>"+obj.postedEvents[i].eventdescription+"</p><ul class='list-inline'> <li><a href='#' class='link-black text-sm'><i class='fa fa-share margin-r-5'></i> Share</a></li><li><a href='#' class='link-black text-sm'><i class='fa fa-thumbs-o-up margin-r-5'></i> Like</a></li><li class='pull-right'><a href='#' class='link-black text-sm'><i class='fa fa-comments-o margin-r-5'></i> 5 people going</a></li></ul></div>";

        }
        $("#timeline").html(panel);

                   
}
}