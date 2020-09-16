let attractions;
fetch('attractions.json')
	.then(response => response.json())
	.then(data => {
		attractions = data;
		filterData(document.querySelector("#attraction-category").value);
	});


function filterData(category) {
	var data;
	attractions.sort((a, b) => b.Visitors - a.Visitors);
	if(category.localeCompare("all") == 0) {
		data = attractions.slice(0,5);
	} else {
		data = attractions.filter(att => att.Category === category).slice(0,5);
	}
    renderBarChart(data);
}

var element = document.querySelector("#attraction-category");
element.addEventListener("change", function(e) {
    filterData(e.target.value);
});