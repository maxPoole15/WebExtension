async function fetchData() {

    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Boise&minDate=2023-10-11&maxDate=2023-10-18&page=1';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ea5ba24fbmshd46ace44864a77ep1d2a30jsncf2e053bdab1',
		'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

	const response = await fetch(url, options)
	const result = await response.json()

	console.log('record', result)
}
fetchData();