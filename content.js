function fillAndSubmitForm() {
  // Function to click the "Single Point" option if it's not already expanded
  const expandSinglePointSection = () => {
    const singlePointButton = Array.from(document.querySelectorAll('h2')).find(h2 => h2.innerText.trim() === "Single Point");
    if (singlePointButton) {
      singlePointButton.click();
    } else {
      console.error('Single Point section not found.');
    }
  };

  // Extract latitude and longitude from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const latitude = urlParams.get('lat');
  const longitude = urlParams.get('lng');

  // Check if both latitude and longitude are available
  if (latitude && longitude) {
    // First, expand the "Single Point" section
    expandSinglePointSection();

    // Wait for a short period to ensure the fields are visible
    setTimeout(() => {
      // Find the latitude and longitude input fields by their IDs
      const latitudeField = document.getElementById('ifdDdLatitudeInput');
      const longitudeField = document.getElementById('ifdDdLongitudeInput');

      // If the fields are found, fill in the values
      if (latitudeField && longitudeField) {
        latitudeField.value = latitude;
        longitudeField.value = longitude;

        // Find the submit button and click it
        const submitButton = document.getElementById('ifdSubmitButton');
        if (submitButton) {
          submitButton.click();
        } else {
          console.error('Submit button not found.');
        }
      } else {
        console.error('Latitude and/or longitude fields not found.');
      }
    }, 1000);  // Wait 1 second before filling in the fields
  } else {
    console.error('Latitude and/or longitude not provided in URL.');
  }
}

// Run the function to fill the form and submit it when the page loads
document.addEventListener('DOMContentLoaded', fillAndSubmitForm);
