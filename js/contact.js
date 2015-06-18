$(function() {
	'use strict';

    // Signup form
    $('#signup').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"inc/signup.php",
                success: function() {
                    $('#signup :input').attr('disabled', 'disabled');
                    $('#signup').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#signup').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
    	
	// Trial signup form
    $('#trial').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"inc/trial.php",
                success: function() {
                    $('#trial :input').attr('disabled', 'disabled');
                    $('#trial').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#trial').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
	
    // Subscription form
    $('#subscribe').validate({
        rules: {
            subscribe_email: {
                required: true,
                email: true
            } 
        },
        messages: {
            subscribe_email: {
                required: "Please enter your email address"
            } 
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"inc/subscribe.php",
                success: function() {
                    $('#subscribe :input').attr('disabled', 'disabled');
                    $('#subscribe').fadeTo( "slow", 0, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                        setTimeout(function() {
                            $('.form-box.subscribe, [data-next]').hide();
                            // $("[data-next]").each(function(){
                            //     $(this).text($(this).data("next"));
                            // });
                            $("#subscribe-next").fadeIn("fast", function() {
                                resize_intro();
                            });
                        }, 1500);
                    });
                },
                error: function() {
                    $('#subscribe').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });

   	$('#subscribe-next').validate({
        rules: {
            subscribe_email: {
                required: true,
                email: true
            } 
        },
        messages: {
            subscribe_email: {
                required: "Please enter your email address"
            } 
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"inc/subscribe.php",
                success: function() {
                    $('#subscribe :input').attr('disabled', 'disabled');
                    $('#subscribe').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#subscribe').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });

});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48802538-4', 'auto');
ga('send', 'pageview');