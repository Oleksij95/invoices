function checkkalk () {
	var ch1 = document.getElementById('ch1'),
		ch2 = document.getElementById('ch2'),
		ch3 = document.getElementById('ch3'),
		ch4 = document.getElementById('ch4'),
		k = 0;
		if (ch1.checked){
			k = k + 1;
		}
		if (ch2.checked){
			k = k + 1;
		}
		if (ch3.checked){
			k = k + 1;
		}
		if (ch4.checked){
			k = k + 1;
		}
		
	 	document.getElementById('calc').innerHTML = k;
};

function closePanel () {
		$('.LogPastServices').css({
			'display':'none',
		});

		$('.Cars').css({
			'top':'50px',
		});

		$('.UpcomingRecommendedServices').css({
			'top':'500px',
		});
};


var b = 1; 
var d = 1; 
var a = 1; 

$('#Li_User').bind("click",function() {
	$('.openUser').css({
		'display':'block',
	});

	$('.openNotific').css({
		'display':'none',
	});

	$('.openHelp').css({
		'display':'none',
	});

});


$('#Li_Help').bind("click",function() {
	$('.openHelp').css({
		'display':'block',
	});

	$('.openUser').css({
		'display':'none',
	});

	$('.openNotific').css({
		'display':'none',
	});


});


$('#Li_Not').bind("click",function() {
	$('.openNotific').css({
		'display':'block',
	});

	$('.openUser').css({
		'display':'none',
	});

	$('.openHelp').css({
		'display':'none',
	});
});



$('div:not(.red)').bind("click",function() {
	$('.openUser').css({
		'display':'none',
	});

	$('.openHelp').css({
		'display':'none',
	});
	$('.openNotific').css({
		'display':'none',
	});
});
function Check () {
	var ch4 = document.getElementById('myonoffswitch_4'),
		ch1 = document.getElementById('myonoffswitch'),
		ch2 = document.getElementById('myonoffswitch_2'),
		ch3 = document.getElementById('myonoffswitch_3');

		
		(function () {
		var ch4 = document.getElementById('myonoffswitch_4'),
			ch1 = document.getElementById('myonoffswitch'),
			ch2 = document.getElementById('myonoffswitch_2'),
			ch3 = document.getElementById('myonoffswitch_3');

			if (ch1.checked || ch2.checked || ch3.checked){
				ch4.checked = false;
			}

			if (!ch1.checked && !ch2.checked && !ch3.checked){
				ch4.checked = true;
			}	
		}());
};


function Validation() {
	var name = document.getElementById('Name').value,
		email = document.getElementById('Email').value,
		phone = document.getElementById('Phone').value,
		zipCode = document.getElementById('ZipCode').value,
		adress = document.getElementById('Adress').value,
		pattern = /^[\s]+$/,
		pattern_number = /^[\d]+$/,
		pattern_email = /^[a\@?]+$/,
		pattern_world = /^[\D]+$/; // не цифровой

		if (name == "" || pattern.test(name) || pattern_number.test(name)){
			$('#Name').css({
				'border':'1px solid red',
			});
		}

		if (email == "" || pattern.test(email)){
			$('#Email').css({
				'border':'1px solid red',
			});
		}

		if (phone == "" || pattern.test(phone) || pattern_world.test(phone)){
			$('#Phone').css({
				'border':'1px solid red',
			});
		}

		if (zipCode == "" || pattern.test(zipCode)){
			$('#ZipCode').css({
				'border':'1px solid red',
			});
		}

		if (adress == "" || pattern.test(adress)){
			$('#Adress').css({
				'border':'1px solid red',
			});
		}
};

function ValidationPassrord() {
	var	oldpassword = document.getElementById('OldPassword').value,
		newpassword = document.getElementById('NewPassword').value,
		confirmpassword = document.getElementById('ConfirmPassword').value,
		pattern = /^[\s]+$/;

		if(oldpassword == "" || pattern.test(oldpassword)){
			$('#OldPassword').css({
				'border':'1px solid red',
			});
		}

		if(newpassword.length < 6){
			$('#NewPassword').css({
				'border':'1px solid red',
			});
		}
		if(newpassword !== confirmpassword){
			$('#NewPassword').css({
				'border':'1px solid red',
			})

			$('#ConfirmPassword').css({
				'border':'1px solid red',
			})
		}

		if(confirmpassword == "" || pattern.test(confirmpassword)){
			$('#ConfirmPassword').css({
				'border':'1px solid red',
			});
		}
};


document.getElementById("copyButton").addEventListener("click", function() {
	copyToClipboard(document.getElementById("copyTarget"));
});

function copyToClipboard(elem) {
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        target.textContent = "";
    }

    $('.IScopy').css({
		'top':'0',
	})


	function hide() {
		$('.IScopy').css({
			'top':'-200px',
			'transition': 'all 2s',
			'-o-transition': 'all 2s',
			'-webkit-transition': 'all 2s',
		})
	};
	setTimeout(hide, 2000);

    return succeed;
};


function HideModal() {
	$('#Preview_e-mail').modal("hide");
	$('#Modal_add_card').modal("hide");
};

// $('.cancel').keyup(function(){
//    	if(event.keyCode==13)
// 	    {
// 	       $(this).click();
// 	       return false;
// 	    }
// })




function DateTest() {
	var mm = document.getElementById('MM').value,
		yy = document.getElementById('YY').value,
		cvc = document.getElementById('CVC').value;

		$('#MM').keyup(function(){
		  if($(this).val().match(/^\d{2}$/)){
		    $(this).next('input').focus();
		  }
		});
		$('#YY').keyup(function(){
		  if($(this).val().match(/^\d{4}$/)){
		    $(this).next('input').focus();
		  }
		});

		$('#CVC').keyup(function(){
		  if($(this).val().match(/^\d{3}$/)){
		    $('.save').focus();
			} 
		});
};

// function animate () {
// 	 $('.noactive').click(function() {
//         $(this).addClass('anim')
//     }, function() {
//         $(this).removeClass('anim')
//     });
// };

function GoNotif() {

	$('.MESSAGES').removeClass('active');
	$('.NOTIFICATION').addClass('active');

	$('.Oll_message').css({
		'display':'none',
	})

	$('.Oll_Notif').css({
		'display':'block',
	})

};

function GoMessage() {

	$('.NOTIFICATION').removeClass('active');
	$('.MESSAGES').addClass('active');

	$('.Oll_Notif').css({
		'display':'none',
	})

	$('.Oll_message').css({
		'display':'block',
	})

};

