document.getElementById('coordinate-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const coordinates = document.getElementById('coordinates').value;
  const [latitude, longitude] = coordinates.split(',').map(coord => coord.trim());

  if (latitude && longitude) {
    // Construct the full URL based on the provided coordinates
    const url = `http://www.bom.gov.au/water/designRainfalls/revised-ifd/?coordinate_type=dd&latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&user_label=&design=ifds&sdmin=true&sdhr=true&sdday=true&nsd%5B%5D=&nsdunit%5B%5D=m&values=depths&update=`;
    
    // Open the constructed URL in a new tab
    chrome.tabs.create({ url: url });
  } else {
    alert('Please enter valid coordinates in the format: lat, lng');
  }
});
