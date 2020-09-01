$(document).ready(function () {
            var showVar = '';
    $(".auto-scroll .section").bind('mousewheel DOMMouseScroll', _.debounce(function (event) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            $("#section4.active .top-content .content-container .content").removeClass("animated slideInUp")
            $(".sec3-col-style.anim .sec3-cont2").removeClass("animated slideInUp")
            $("#section1, #section2, #section3, #section4, #section5").removeClass("up on");
            $(".devices img").removeClass("slideInLeft");
            $(this).removeClass("active").prev().removeClass("old").addClass("active").find(".devices img").addClass("slideInLeft");
            
//            detector on scroll
    if($("#section1").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar1").addClass("active");
        showVar = "active1";
    }
    if($("#section2").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar2").addClass("active")
        showVar = "active2";
    }
    if($("#section3").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar3").addClass("active");
        showVar = "active3";
    }
    if($("#section4").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar4").addClass("active")
        showVar = "active4";
    }
    if($("#section5").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar5").addClass("active")
        showVar = "active5";
    }


        }
        else {
            $("#section1, #section2, #section3, #section4, #section5").removeClass("up on");
            $(this).addClass("old").removeClass("active").next().addClass("active").find(".devices img").addClass("slideInLeft");
            $("#section3.active .sec3-col-style.anim .sec3-cont2").addClass("animated slideInUp");
//            detector
            
    if($("#section1").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar1").addClass("active");
        showVar = "active1"
    }
    if($("#section2").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar2").addClass("active")
        showVar = "active2"
    }
    if($("#section3").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar3").addClass("active")
        showVar = "active3"
    }
    if($("#section4").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar4").addClass("active")
        $(".showcase").removeClass(showVar)
        showVar = "active4"
    } 
    if($("#section5").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar5").addClass("active")
        $(".showcase").removeClass(showVar)
        showVar = "active5"
    }
            console.log("hel")
        }
    $(".showcase").addClass(showVar)
    }, 300));
    $("#bar1").click(function () {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $(".custom-scrollbar ul li").removeClass("active")
        $(this).addClass("active")
        $("#section3 .devices img").removeClass("slideInLeft");
        $("#section4 .content").removeClass("slideInUp");
        $(".section").removeClass("on").addClass("up");
        $("#section1").removeClass("up").addClass("on");
        showVar = "active1"
        $(".showcase").addClass(showVar)
    })
    $("#bar2").click(function () {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
         $(".custom-scrollbar ul li").removeClass("active")
        $(this).addClass("active")
        $("#section3 .devices img").removeClass("slideInLeft");
        $("#section4 .content").removeClass("slideInUp");
        $(".section").removeClass("on").addClass("up");
        $("#section2").removeClass("up").addClass("on");
        showVar = "active2"
        $(".showcase").addClass(showVar)
    })
    $("#bar3").click(function () {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
         $(".custom-scrollbar ul li").removeClass("active")
        $(this).addClass("active")
        $("#section4 .content").removeClass("slideInUp");
        $(".section").removeClass("on").addClass("up");
        $("#section3").removeClass("up").addClass("on").find(".devices img").addClass("slideInLeft wait");
        showVar = "active3"
        $(".showcase").addClass(showVar);
            $(".sec3-col-style.anim .sec3-cont2").addClass("animated slideInUp");
        
    })
    $("#bar4").click(function () {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
         $(".custom-scrollbar ul li").removeClass("active")
        $(this).addClass("active")
        $("#section3 .devices img").removeClass("slideInLeft");
        $(".section").addClass("up"); $("#section4").removeClass("on").removeClass("up").addClass("on").find(".content").addClass("animated slideInUp wait");
        showVar = "active4"
        $(".showcase").addClass(showVar)
    })
     $("#bar5").click(function () {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
         $(".custom-scrollbar ul li").removeClass("active")
        $(this).addClass("active")
        $("#section4 .devices img").removeClass("slideInLeft");
        $(".section").addClass("up"); $("#section5").removeClass("on").removeClass("up").addClass("on").find(".content").addClass("animated slideInUp wait");
        showVar = "active5"
        $(".showcase").addClass(showVar)
    })
    $(document).keydown(function (e) {
        var keyCode = e.keyCode || e.which;
        var arrow = {
            left: 37
            , up: 38
            , right: 39
            , down: 40
        };
        switch (keyCode) {
        case arrow.left:
            break;
        case arrow.up:
                $("#section1").addClass("first")
                $(".section.active, .section.last").removeClass("active").prev().removeClass("old").addClass("active").find(".devices img").addClass("slideInLeft");
                $("#section5").removeClass("last")
                
                    //            detector on keyup
    if($("#section1").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar1").addClass("active")
        showVar = "active1"
    }
    if($("#section2").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar2").addClass("active")
            showVar = "active2"
        
    }
    if($("#section3").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar3").addClass("active")
        showVar = "active3"
    }
    if($("#section4").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar4").addClass("active")
        showVar = "active4"
    }
    if($("#section5").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar5").addClass("active")
        showVar = "active5"
    }
      console.log(showVar)
                
        $(".showcase").addClass(showVar)
                
            break;
        case arrow.right:
            break;
        case arrow.down: 
             $("#section5").addClass("last");
                $(".section.active, .section.first").addClass("old").removeClass("active").next().addClass("active").find(".devices img").addClass("slideInLeft");
                $("#section1").removeClass("first");
                                    //            detector on keyup
    if($("#section1").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar1").addClass("active")    
        showVar = "active1"
    }
    if($("#section2").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar2").addClass("active")
        showVar = "active2"
    }
    if($("#section3").hasClass("active")) {
        $(".showcase").removeClass(showVar);
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar3").addClass("active")    
        showVar = "active3"
    }
    if($("#section4").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar4").addClass("active")    
        showVar = "active4"
    }
    if($("#section5").hasClass("active")) {
        $(".showcase").removeClass(showVar)
        $(".custom-scrollbar ul li").removeClass("active")
        $("li#bar5").addClass("active")    
        showVar = "active5"
    }
        $(".showcase").addClass(showVar)
            break;
        }
    });
    
//    form focus
    
    $( "#section1 form .form-control" ).focus(function() {
        $(".form-container, .showcase").addClass("form-fixed")
}); 
    
      //    hide clicking outside
    jQuery(document).mouseup(function (e) {
        var upContainer = jQuery(".form-container");
        // if the target of the click isn't the container nor a descendant of the container
        if (!upContainer.is(e.target) && upContainer.has(e.target).length === 0) {
            upContainer.removeClass("form-fixed");
            $(".showcase").removeClass("form-fixed")
        }
    });
    
    $(".sec1-form-style").focus(function(){
        $(this).removeClass("has-bg")
    })
        $(".sec1-form-style").blur(function(){
        if($(this).val() == "") {
        $(this).addClass("has-bg")
        }
    })

})