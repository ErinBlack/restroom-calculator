function calculateRestrooms() {

	if (document.images) {
	unitsChart = new Object();
	unitsChart.a = new Array("1","1","1","1","1","1","1","1","1","1"); //less than 50 people
	unitsChart.b = new Array("1","1","1","1","1","2","2","2","2","2"); //100 people
	unitsChart.c = new Array("2","2","2","2","2","3","3","3","3","3"); //200 people
  unitsChart.d = new Array("3","3","3","3","3","3","3","4","4","4"); //300 people
  unitsChart.e = new Array("4","4","4","4","4","4","4","5","5","5"); //400 people
	unitsChart.f = new Array("5","5","5","5","6","6","6","8","8","8"); //500 people
	unitsChart.g = new Array("4","5","6","7","7","8","8","8","9","9"); //1,000 people
	unitsChart.h = new Array("6","9","11","13","14","14","15","15","16","16"); //2,000 people
	unitsChart.i = new Array("9","14","17","19","21","22","22","23","23","24"); //3,000 people
	unitsChart.j = new Array("12","18","23","26","28","29","30","31","31","32"); //4,000 people
	unitsChart.k = new Array("15","23","28","32","35","36","37","39","39","40"); //5,000 people
	unitsChart.l = new Array("18","28","34","39","41","43","44","46","47","48"); //6,000 people
	unitsChart.m = new Array("21","32","40","45","48","51","52","54","55","57"); //7,000 people
	unitsChart.n = new Array("24","37","46","51","55","58","59","62","62","65"); //8,000 people
	unitsChart.o = new Array("30","46","57","64","69","72","74","77","78","81"); //10,000 people
	unitsChart.p = new Array("44","69","85","96","104","108","111","116","117","121"); //15,000 people
	unitsChart.q = new Array("59","92","114","128","138","144","148","155","156","162"); //20,000 people
	}

	if (document.images) {
		attenders = document.calculator.attending.selectedIndex;
		theHours = document.calculator.duration.selectedIndex;
		units = new Object();
		if (attenders == 1) {
   			units = unitsChart.a;
		} else if (attenders == 2) {
   			units = unitsChart.b;
		} else if (attenders == 3) {
   			units = unitsChart.c;
		} else if (attenders == 4) {
   			units = unitsChart.d;
		} else if (attenders == 5) {
   			units = unitsChart.e;
		} else if (attenders == 6) {
   			units = unitsChart.f;
		} else if (attenders == 7) {
   			units = unitsChart.g;
		} else if (attenders == 8) {
   			units = unitsChart.h;
		} else if (attenders == 9) {
   			units = unitsChart.i;
		} else if (attenders == 10) {
   			units = unitsChart.j;
		} else if (attenders == 11) {
   			units = unitsChart.k;
		} else if (attenders == 12) {
   			units = unitsChart.l;
		} else if (attenders == 13) {
   			units = unitsChart.m;
		} else if (attenders == 14) {
   			units = unitsChart.n;
		} else if (attenders == 15) {
   			units = unitsChart.o;
		} else if (attenders == 16) {
   			units = unitsChart.p;
		} else if (attenders == 17) {
   			units = unitsChart.q;
		} else if (attenders == 18) {
   			units = unitsChart.r;
		} else if (attenders == 19) {
   			units = unitsChart.s;
		} else if (attenders == 20) {
   			units = unitsChart.t;
    } else if (attenders == 21) {
        units = unitsChart.u;
    } else if (attenders == 22) {
        units = unitsChart.v;
    }else {
			document.calculator.num_required.value = "Call For Estimate";
		}
		var toiletCount = Number(toiletCount);
		var theHours = Number(theHours);
		toiletCount = units[theHours];
		if (document.calculator.women[1].checked) {
			toiletCount = toiletCount * 1;
		} else {
			toiletCount = toiletCount * 1.13;
		}
		if (document.calculator.alcohol[1].checked) {
			toiletCount = toiletCount * 1;
		} else {
			toiletCount = toiletCount * 1.13;
		}
		toiletCount = Math.round(toiletCount);
		document.calculator.num_required.value = toiletCount;

    sinkNum = Math.round(toiletCount / 5);
    sinkCount = ( sinkNum > 1) ? sinkNum : 1;
    document.calculator.sinks_required.value = sinkCount;

    handicappedNum = Math.ceil(toiletCount / 10);
    handicappedCount = (handicappedNum > 1) ? handicappedNum : 1;
    document.calculator.handicapped_required.value = handicappedCount;

	} else {
		alert("Can not calculate. Please enable Javascript.");
	}
}
;
(function($) {
	Drupal.behaviors.eventCalculator = {
		attach: function(context, settings) {
			var calculator = $('#event-calculator');
			if (calculator.length) {
				var attendingSelect = $('#attending');
				
				attendingSelect.change(function() {
					// Calculate toilets, sinks, and handicapped accessible restrooms
					// 4 toilets for first 200
					// 1 additional toilet per each 50 after 200
					// 1 sink per 3 toilets
					// 1 ada for every 20 toilets
					var attending = attendingSelect.val();
					var toilets = 0;
					var sinks = 0;
					var ada = 1;
					
					// calculate toilets
					if (attending <= 200) {
						toilets = 4;
					} else {
						toilets = 4 + ((attending - 200) / 50);
					}
					// calculate sinks
					sinks = Math.floor(toilets / 3);
					// calculate ada (handicap)
					ada = Math.floor(toilets / 20);
					if (ada == 0) {
						ada = 1;
					}
					
					// Set textbox values
					$('#toilets').val(toilets);
					$('#sinks').val(sinks);
					$('#handicapped').val(ada);
				});
			}
		}
	}
})(jQuery);;

