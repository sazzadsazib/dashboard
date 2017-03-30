var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["Dhaka","Bogura","Shunamgonj"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor :  "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [500,70,150]
				},
				
			]

		}
			
		// var lineChartDatatest = {
		// 	labels : ["January","February","March","April","May","June","July"],
		// 	datasets : [
		// 		{
		// 			label: "My First dataset",
		// 			fillColor : "rgba(220,220,220,0.2)",
		// 			strokeColor : "rgba(220,220,220,1)",
		// 			pointColor : "rgba(220,220,220,1)",
		// 			pointStrokeColor : "#fff",
		// 			pointHighlightFill : "#fff",
		// 			pointHighlightStroke : "rgba(220,220,220,1)",
		// 			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		// 		},
		// 		{
		// 			label: "My Second dataset",
		// 			fillColor : "rgba(48, 164, 255, 0.2)",
		// 			strokeColor : "rgba(48, 164, 255, 1)",
		// 			pointColor : "rgba(48, 164, 255, 1)",
		// 			pointStrokeColor : "#fff",
		// 			pointHighlightFill : "#fff",
		// 			pointHighlightStroke : "rgba(48, 164, 255, 1)",
		// 			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		// 		}
		// 	]

		// }
			
		
	var DisOfBlueCollerJobSeeker = {
			labels : ["Dhaka","Bogura","Shunamgonj"],
			datasets : [
				{	label: "Female",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{	label: "Male",
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

		var jobstatusData = {
			labels : ["Employed","Self-Employed","Unemployed"],
			datasets : [
				{	
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

		var priorApplyJobData = {
			labels : ["Working Hr","Salary","Security","WorkPlace Location","No Of People Recruited","Work Enviroment","Yearly Bonus","Other Facility","How Many Days Leave","Nature Of Job","At What date Salary is Paid","Amount Of OverTime"],
			datasets : [
				{	
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

			var varMaritalStatusMaleFemaleData = {
			labels : ["Married","Unmarried"],
			datasets : [
				
				{	
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor()]
				},
				{	
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}


			var dataWillingtoPayforJobInfo = {
			labels : ["YES","NO"],
			datasets : [
				
				{	
					fillColor : "rgba(247, 108, 127, 0.2)",
					strokeColor : "rgba(247, 108, 127, 0.8)",
					highlightFill : "rgba(247, 108, 127, 0.75)",
					highlightStroke : "rgba(247, 108, 127, 1)",
					data : [randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}


//three data area graph

var dataThreearea = {
    labels: ["40+yr", "35-39yr", "30-34yr", "25-29yr", "20-24yr", "15-19yr"],
    datasets: [{
        label: "Bogura",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27]
    },
    {
        label: "Dhaka",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55]
    }]
};

var chart04 = document.getElementById("chart-agedist").getContext("2d");
var myBarChart = new Chart(chart04).Bar(dataThreearea , {responsive: true});


// inserting the new dataset after 3 seconds
setTimeout(function() {
    var myNewDataset = {
        label: "Shunamgonj",
        fillColor: "rgba(187,205,151,0.5)",
        strokeColor: "rgba(187,205,151,0.8)",
        highlightFill: "rgba(187,205,151,0.75)",
        highlightStroke: "rgba(187,205,151,1)",
        data: [48, 40, 19, 86, 27, 90]
    }

    var bars = []
    myNewDataset.data.forEach(function (value, i) {
        bars.push(new myBarChart.BarClass({
            value: value,
            label: myBarChart.datasets[0].bars[i].label,
            x: myBarChart.scale.calculateBarX(myBarChart.datasets.length + 1, myBarChart.datasets.length, i),
            y: myBarChart.scale.endPoint,
            width: myBarChart.scale.calculateBarWidth(myBarChart.datasets.length + 1),
            base: myBarChart.scale.endPoint,
            strokeColor: myNewDataset.strokeColor,
            fillColor: myNewDataset.fillColor
        }))
    })

    myBarChart.datasets.push({
        bars: bars
    })

    myBarChart.update();
}, 500);






//three area graph


//area chart starts 
	var datasetforagedistarea = {
  labels: ["40+yr", "35-39yr", "30-34yr", "25-29yr", "20-24yr", "15-19yr"],
  datasets: [{
    label: "Dhaka",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 80, 81, 56, 55]
  }, {
    label: "Bogura",
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [28, 48, 40, 19, 86, 27]
  }]
};

var optionsforagedistarea = {
  bezierCurve: false,
  animation: true,
  animationEasing: "easeOutQuart",
  showScale: false,
  tooltipEvents: ["mousemove", "touchstart", "touchmove"],
  tooltipCornerRadius: 3,
  pointDot : true,
  pointDotRadius : 4,
  datasetFill : true,
  scaleShowLine : true,
  animationEasing : "easeOutBounce",
  animateRotate : true,
  animateScale : true,
};

	//linear bar chart data

	

	var dataWillingtoPayage = {
    labels: ["15-19year", "20-24year", "25-29year", "30+year"],
    datasets: [
           {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(247, 108, 127, 0.2)",
            strokeColor: "rgba(247, 108, 127, 1)",
            pointColor: "rgba(247, 108, 127, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),]
        }
    ]
};

	var dataWillingtoSpendAgeByMoney = {
    labels: ["0 Taka", "Upto 20 Taka", "Taka 21-30", "Taka 31-40", "Taka 41-50", "Taka 51-100", "Taka 100+"],
    datasets: [
           {
            label: "30+",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }, {
            label: "25-29",
            fillColor: "rgba(247, 108, 127, 0.2)",
            strokeColor: "rgba(247, 108, 127, 1)",
            pointColor: "rgba(247, 108, 127, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor() ]
        }, {
            label: "20-24",
            fillColor: "rgba(255, 136, 17, 0.2)",
            strokeColor: "rgba(255, 136, 17, 1)",
            pointColor: "rgba(255, 136, 17, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }, {
            label: "15-9",
            fillColor: "rgba(101, 183, 38, 0.2)",
            strokeColor: "rgba(101, 183, 38, 1)",
            pointColor: "rgba(101, 183, 38, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]
};

	var SourceOfCurrentJobInfoData = {
    labels: ["SignBoard", "Own Initiative", "Leaflet", "Known People", "Training Center", "Teacher", "Miking", "Colleague", "Factory Gate", "Website", "Newspaper", 
    "Neighbour", "Friends", "Cable Tv",, "Radio",, "Family"],
    datasets: [
           {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),
            randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),
            randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]
};
	var JobInfoInGData = {
    labels: ["Mobile", "Relative", "SignBoard", "Factory", "Website", "Colleague", "Neighbour", "Friends" ],
    datasets: [
           {
            label: "My Second dataset",
            fillColor: "rgba(247, 108, 127, 0.2)",
            strokeColor: "rgba(247, 108, 127, 1)",
            pointColor: "rgba(247, 108, 127, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),
            randomScalingFactor(),randomScalingFactor()]
        }
    ]
};


	var pieData = [
				{
					value: 300,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Orange"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Teal"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Red"
				}

			];
			var pieData2 = [
				{
					value: randomScalingFactor(),
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Male"
				},
				{
					value: randomScalingFactor(),
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Female"
				}];

					var pieData3 = [
				{
					value: randomScalingFactor(),
					color:"#BFBFBF",
					highlight: "#D6D6D6",
					label: "Illiterate"
				},{
					value: randomScalingFactor(),
					color:"#5998C5",
					highlight: "#2381C4",
					label: "Upto Class 5"
				},
				{
					value: randomScalingFactor(),
					color: "#CFFFB0",
					highlight: "#ADFF77",
					label: "SSC"
				},
				{
					value: randomScalingFactor(),
					color: "#E03616",
					highlight: "#E05F45",
					label: "HSC"
				},
				{
					value: randomScalingFactor(),
					color: "#FFF689",
					highlight: "#FFF9BA",
					label: "Diploma"
				},
				{
					value: randomScalingFactor(),
					color: "#23C4BE",
					highlight: "#52C4C0",
					label: "Degree"
				},
				{
					value: randomScalingFactor(),
					color: "#8A1CDD",
					highlight: "#8A1CDD",
					label: "Masters"
				}];
			
	var doughnutData = [
					{
						value: randomScalingFactor(),
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "Blue"
					},
					{
						value: randomScalingFactor(),
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Orange"
					},
					{
						value: randomScalingFactor(),
						color: "#1ebfae",
						highlight: "#3cdfce",
						label: "Teal"
					},
					{
						value: randomScalingFactor(),
						color: "#f9243f",
						highlight: "#f6495f",
						label: "Red"
					}
	
				];


			var avgLengthOfPresentJobData = [
					{
						value: randomScalingFactor(),
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "1-2years"
					},
					{
						value: randomScalingFactor(),
						color: "#ffb53e",
						highlight: "#fac878",
						label: "2-3years"
					},
					{
						value: randomScalingFactor(),
						color: "#1ebfae",
						highlight: "#3cdfce",
						label: "3-4years"
					},
					{
						value: randomScalingFactor(),
						color: "#f9243f",
						highlight: "#f6495f",
						label: "4-5years"
					},
					{
						value: randomScalingFactor(),
						color: "#44AF69",
						highlight: "#51D17E",
						label: "5-10years"
					}
	
				];
				// Radar Chart Options
var radarOptions = {
				
	//Boolean - If we show the scale above the chart data			
	scaleOverlay : false,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : false,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : null,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : null,
	//Number - The centre starting value
	scaleStartValue : null,
	
	//Boolean - Whether to show lines for each scale point
	scaleShowLine : true,

	//String - Colour of the scale line	
	scaleLineColor : "#999",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : false,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",
	
	//Boolean - Show a backdrop to the scale label
	scaleShowLabelBackdrop : true,
	
	//String - The colour of the label backdrop	
	scaleBackdropColor : "#000",
	
	//Number - The backdrop padding above & below the label in pixels
	scaleBackdropPaddingY : 2,
	
	//Number - The backdrop padding to the side of the label in pixels	
	scaleBackdropPaddingX : 2,
	
	//Boolean - Whether we show the angle lines out of the radar
	angleShowLineOut : true,
	
	//String - Colour of the angle line
	angleLineColor : "rgba(255,255,255,0.3)",
	
	//Number - Pixel width of the angle line
	angleLineWidth : 1,			
	
	//String - Point label font declaration
	pointLabelFontFamily : "'Arial'",
	
	//String - Point label font weight
	pointLabelFontStyle : "normal",
	
	//Number - Point label font size in pixels	
	pointLabelFontSize : 12,
	
	//String - Point label font colour	
	pointLabelFontColor : "#777",
	
	//Boolean - Whether to show a dot for each point
	pointDot : true,
	
	//Number - Radius of each point dot in pixels
	pointDotRadius : 3,
	
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 1,
	
	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
	
}
	var radarData = {
	labels : ["GP","Robi","Banglalink","Teletalk","Citycell","Airtel"],
	datasets : [
		{	

			fillColor : "rgba(255, 136, 17, 0.5)",
			strokeColor : "rgba(255, 136, 17, 1)",
			// highlight:  "rgba(255, 136, 17, 1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),]
		},
		{	
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			// highlight:  "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),]
		},
		{	
			fillColor : "rgba(101, 183, 38, 0.5))",
			strokeColor : "rgba(101, 183, 38, 1)",
			// highlight:  "rgba(101, 183, 38, 1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),]
		}
	]
}





window.onload = function(){


	

	var chart01 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart01).Bar(DisOfBlueCollerJobSeeker, {
		responsive : true
	}); //this is chart 1 {respondent page}

	var chart02 = document.getElementById("pie-chartforGender").getContext("2d");
	window.myPie = new Chart(chart02).Pie(pieData2, {responsive : true
	}); //this is chart 2 {respondent page}


	var chart03 = document.getElementById("bar-chartMaritialStatus").getContext("2d");
	window.myBar = new Chart(chart03).Bar(varMaritalStatusMaleFemaleData, {
		responsive : true
	}); //this is chart 3 {respondent page}

	//Get the context of the Radar Chart canvas element we want to select

	//from here
	// var chart04 = document.getElementById("bar-chartAgeDistribution").getContext("2d");

	// var myLineChart = new Chart(chart04).Line(datasetforagedistarea, optionsforagedistarea);

	//till here bar area graph


	//chart04 is before onload due to three dataset see top codes named chart04 var


	var chart05 = document.getElementById("pie-chartforEdu").getContext("2d");
	window.myPie = new Chart(chart05).Pie(pieData3, {responsive : true
	}); //this is chart 5 {respondent page}

	var chart06 = document.getElementById("jobStatus-bar").getContext("2d");
	window.myBar = new Chart(chart06).Bar(jobstatusData, {
		responsive : true
	}); //this is chart 6 {respondent page}

	
	// var chart07 = document.getElementById("pie-chartForAvgLengthOfPresentJob").getContext("2d");
	// window.myPie = new Chart(chart07).Pie(avgLengthOfPresentJobData, {responsive : true
	// }); //this is chart 7 {respondent page}


	var chart07 = document.getElementById("pie-chartForAvgLengthOfPresentJob").getContext("2d");
	window.myDoughnut = new Chart(chart07).Doughnut(avgLengthOfPresentJobData, {responsive : true
	}); //this is chart 7 {respondent page}



	var chart08 = document.getElementById("line-willingPayJobInfo").getContext("2d");
	window.myBar = new Chart(chart08).Bar(dataWillingtoPayforJobInfo, {
		responsive : true
	}); //this is chart 08 dataWillingtoPayforJobInfo {respondent page}




	var chart09 = document.getElementById("line-sourceOfCurrentJob").getContext("2d");
	window.myLineChart = new Chart(chart09).Line(SourceOfCurrentJobInfoData, {responsive : true
	}); //this is chart 9 {respondent page}




	var chart10 = document.getElementById("line-JobInfoInG").getContext("2d");
	window.myLineChart = new Chart(chart10).Line(JobInfoInGData, {responsive : true
	}); //this is chart 10 {respondent page}



var chart11 = document.getElementById("line-priorApplyJob").getContext("2d");
	window.myBar = new Chart(chart11).Bar(priorApplyJobData, {
		responsive : true
	}); //this is chart 11 {respondent page}

	var chart12 = document.getElementById("line-willingtoPayInAge").getContext("2d");
	window.myBar = new Chart(chart12).Line(dataWillingtoPayage, {
		responsive : true
	}); //this is chart 12 {respondent page}

	
var chart13 = document.getElementById("line-willingtoSpendAgeByMoney").getContext("2d");
	window.myBar = new Chart(chart13).Line(dataWillingtoSpendAgeByMoney, {
		responsive : true
	}); //this is chart 13 {respondent page}

	
	var chart14 = document.getElementById("line-subsTelOp").getContext("2d");

// Create the Radar Chart
	var myRadarChart = new Chart(chart14).Radar(radarData, {responsive: true});  //this is chart 14 {respondent page}

















	//from here

	//till here radar chart

	var chart3 = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});

		var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	

	
	
};