// ARR Button: Fetch ARR Data
document.getElementById('fetch-arr-btn').addEventListener('click', function() {
  const coordinates = document.getElementById('coordinates').value.split(',');
  const latitude = coordinates[0].trim();
  const longitude = coordinates[1].trim();

  // Open ARR Data page and inject the necessary inputs
  chrome.tabs.create({ url: 'https://data.arr-software.org/' }, function(tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (latitude, longitude) => {
        const latField = document.getElementById('lat_coord');
        const lonField = document.getElementById('lon_coord');

        if (latField && lonField) {
          // Step 1: Enter Longitude and Latitude
          lonField.value = longitude;
          lonField.dispatchEvent(new Event('input', { bubbles: true }));
          lonField.dispatchEvent(new Event('blur'));

          latField.value = latitude;
          latField.dispatchEvent(new Event('input', { bubbles: true }));
          latField.dispatchEvent(new Event('blur'));

          // Simulate click on empty space to confirm coordinates
          setTimeout(() => {
            const body = document.querySelector('body');
            const clickEvent = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            });
            body.dispatchEvent(clickEvent); // Click away after filling both fields
          }, 1000); // Delay to ensure coordinates are registered before the page reverts
        }
      },
      args: [latitude, longitude]
    });
  });
});

// BOM Button: Fetch BOM Data
document.getElementById('fetch-bom-btn').addEventListener('click', function() {
  const coordinates = document.getElementById('coordinates').value.split(',');
  const latitude = coordinates[0].trim();
  const longitude = coordinates[1].trim();
  const label = document.getElementById('label').value;

  // BOM URL with parameters
  const bomURL = `http://www.bom.gov.au/water/designRainfalls/revised-ifd/?coordinate_type=dd&latitude=${latitude}&longitude=${longitude}&user_label=${label}&design=ifds&sdmin=true&sdhr=true&sdday=true&nsd%5B%5D=&nsdunit%5B%5D=m&values=depths&update=`;

  // Open the BOM URL in a new tab
  chrome.tabs.create({ url: bomURL }, function(tab) {
    console.log('BOM data fetching initiated for coordinates:', latitude, longitude);
  });
});
