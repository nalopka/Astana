var mymap = L.map('mapid', 
		{
			zoomControl: false,
			dragging: false,
			scrollWheelZoom: false,
			doubleClickZoom: false
		});
mymap.setView([51.155, 71.44], 14.2);

var myIcon = L.icon({
    iconUrl: 'img/leafletIcon/map-pin.svg',
    iconSize: [47, 54]
});

var marker = L.marker([51.1618, 71.474598], 
			{
				icon: myIcon
			});

marker.bindTooltip("Индустриальный парк<br> ул. А207б 9П", 
		{
			offset: [25, 0],
			permanent: true, 
			direction: "right",
			className: "mylabel"
		});

marker.addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/nalopka/cj12x9ssd00082ro8yobvptfs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmFsb3BrYSIsImEiOiJjajEyYnVsM3cwMDRjMzJwZ3R3cG1ndTJkIn0.ZtMvIC92ubk--SAyLUO3JA', 
		{
		    maxZoom: 18,
		    id: 'your.mapbox.project.id',
		    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);


