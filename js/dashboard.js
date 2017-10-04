$(document).ready(function() {


		$('#firstVisit').modal("show");
});

	

	var Make = document.getElementById('Make'),
		Year = document.getElementById('Year'),
		Model = document.getElementById('Model'),
		Trim = document.getElementById('Trim'),
		MakeModal = document.getElementById('Make_modal'),
		YearModal = document.getElementById('Year_modal'),
		ModelModal = document.getElementById('Model_modal'),
		TrimModal = document.getElementById('Trim_modal');
		$( Make ).change(
			function () {
		    	if(Make.value == 1){
					Year.disabled = true;
				}else{
					$(Make).css({
						'border':'1px solid green',
					});
					Year.disabled = false;
				}
		})
		.change();

		$( Year ).change(
			function () {
		    	if(Year.value == 1){
					Model.disabled = true;
				}else{
					$(Year).css({
						'border':'1px solid green',
					});
					Model.disabled = false;
				}
		})
		.change()

		$( Model ).change(
			function () {
		    	if(Model.value == 1){
					Trim.disabled = true;
				}else{
					$(Model).css({
						'border':'1px solid green',
					});
					Trim.disabled = false;
				}
		})
		.change()

		$( Trim ).change(
			function () {
		    	if(Trim.value == 1){
					Trim.disabled = true;
				}else{
					$(Trim).css({
						'border':'1px solid green',
					});
					Trim.disabled = false;
				}
		})
		.change();


		$( MakeModal ).change(
			function () {
		    	if(MakeModal.value == 1){
					YearModal.disabled = true;
				}else{
					$(MakeModal).css({
						'border':'1px solid green',
						'background-color': '#fff',
					});
					YearModal.disabled = false;
				}
		})
		.change();

		$( YearModal ).change(
			function () {

		    	if(YearModal.value == 1){
					ModelModal.disabled = true;
				}else{
					$(YearModal).css({
						'border':'1px solid green',
						'background-color': '#fff',
					});
					ModelModal.disabled = false;
				}
		})
		.change()

		$( ModelModal ).change(
			function () {
		    	if(ModelModal.value == 1){
					Model.disabled = true;
				}else{
					$(ModelModal).css({
						'border':'1px solid green',
						'background-color': '#fff',
					});
					TrimModal.disabled = false;
				}
		})
		.change()

		$( TrimModal ).change(
			function () {
		    	if(TrimModal.value == 1){
					TrimModal.disabled = true;
				}else{
					$(TrimModal).css({
						'border':'1px solid green',
						'background-color': '#fff',
					});
					TrimModal.disabled = false;
				}
		})
		.change();


	function closeLogPastServices () {
			$('.LogPastServices').css({
				'display':'none',
			});

			$('.ScheduleanOilChange').css({
				'display':'block',
			});
	};

	function closeScheduleanOilChange () {
			$('.ScheduleanOilChange').css({
				'display':'none',
			});

			$('.ScheduleaDiagnostic').css({
				'display':'block',
			});
	};

	function closeScheduleaDiagnostic () {
			$('.ScheduleaDiagnostic').css({
				'display':'none',
			});
			$('.CarsADD').css({
				'top':'50px',
			});
	};


	function step1() {
			var input = document.getElementById('inputStep1').value,
				coun = document.getElementsByClassName('CONTINUE');
			var pattern = /^[\s]+$/;
			if(input == pattern.test(input)){
				$('#inputStep1').css({
					'border':'1px solid red',
				});
			}	
	};

	function SKIP() {
			var	skipt = document.getElementsByClassName('SKIP');

			$('.step_1_header').css({
				'display':'none',
			});	

			$('.step_1').css({
				'display':'none',
			});

			$('.step_1_footer').css({
				'display':'none',
			});	

			$('.step_2').css({
				'display':'block',
			});	

			$('.step_2_header').css({
				'display':'block',
			});

			$('.step_2_footer').css({
				'display':'block',
			});
	};

	function SKIP2 (){
			$('.step_2').css({
				'display':'none',
			});	

			$('.step_2_header').css({
				'display':'none',
			});

			$('.step_2_footer').css({
				'display':'none',
			});

			$('.step_3').css({
				'display':'block',
			});	

			$('.step_3_header').css({
				'display':'block',
			});
			$('.step_3_footer').css({
				'display':'block',
			});
	};

	function SKIP3 (){
		$('#firstVisit').modal('hide');
	};

	function closeModal (){
		$('#adds').modal('hide');
	};

	function AddCarsF () {
		$('.addCarBody').css({
			'display':'none',
		});

		$('.CarIsAdd').css({
			'display':'block',
		});

		$('.ISADD').css({
			'top':'0',
		})

		function hide() {
		$('.ISADD').css({
			'top':'-200px',
			'transition': 'all 2s',
			'-o-transition': 'all 2s',
			'-webkit-transition': 'all 2s',
		})
	};
	setTimeout(hide, 2000);
		$('#adds').modal("hide");

		$('#mileage').modal("show");
		
	};

	function SkipMileage () {
		$('#mileage').modal("hide");
	};