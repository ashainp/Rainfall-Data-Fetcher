# Rainfall Data Fetcher (BOM/ARR)

A **Chrome extension** that fetches **Intensity-Frequency-Duration (IFD) rainfall data** directly from the **Australian Bureau of Meteorology (BOM)** and rainfall data from **Australian Rainfall and Runoff (ARR)** using geographic coordinates. This extension is designed for engineers, hydrologists, urban planners, and others who need quick access to rainfall data for specific locations in Australia.

## Features
- **Fetch BOM IFD Data by Coordinates**: Input latitude and longitude to retrieve IFD data directly from BOM.
- **Fetch ARR Data by Coordinates**: Automatically input latitude and longitude to view the rainfall map and data from the ARR website.
- **Quick and Simple Interface**: User-friendly interface allows for easy fetching of rainfall data with minimal input.
- **Lightweight**: Minimal permissions are required, ensuring secure and fast functionality.

## How It Works
1. **Input Coordinates**: Enter the latitude and longitude for the location you need rainfall data for.
2. **Fetch Data**: 
   - Click **Fetch BOM Data** to retrieve IFD data from BOM.
   - Click **Fetch ARR Data** to get ARR rainfall data, and the extension will open a new tab displaying the respective data.
3. **View Results**: Data will be fetched directly from the BOM and ARR public databases for analysis and use.

## Installation
1. **Download the extension files** (this repository).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will now be loaded in Chrome, and you can use it from the toolbar.

## Usage
1. Open the extension from the Chrome toolbar.
2. Enter the latitude and longitude coordinates in the input field (e.g., `-42.87555111366436, 147.3937423865089`).
3. Click either **Fetch BOM Data** or **Fetch ARR Data**.
4. The rainfall data will be opened in a new tab, displaying detailed information for the provided coordinates.

## Screenshots
### Example of the Interface:
Refer to screenshots included in the repository for visual representation of the interface.

## Permissions
This extension requests the following permissions:
- **Host Permissions**: Access to the **BOM** and **ARR** websites to fetch the rainfall data based on user input coordinates.
- **Scripting**: Used to inject scripts and automate the data-fetching process from external websites.

## License
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements or new features.

### Steps to Contribute:
1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request and describe the proposed changes.
