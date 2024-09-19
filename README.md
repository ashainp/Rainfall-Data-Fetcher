# BOM IFD Fetcher

A **Chrome extension** that fetches **Intensity-Frequency-Duration (IFD) rainfall data** directly from the **Australian Bureau of Meteorology (BOM)** using geographic coordinates. This extension is designed for engineers, hydrologists, urban planners, and anyone who needs quick access to rainfall design data for specific locations in Australia.

## Features
- **Fetch IFD Data by Coordinates**: Input latitude and longitude coordinates to get rainfall data.
- **Quick and Simple Interface**: Easy-to-use extension that opens the BOM IFD data in a new tab.
- **Lightweight**: Minimal permissions are required, ensuring fast and secure functionality.

## How It Works
1. **Input Coordinates**: Enter the latitude and longitude of the location for which you want rainfall data.
2. **Fetch Data**: Click the "Fetch Data" button, and the extension will open a new tab displaying the BOM IFD data for the entered location.
3. **View Results**: The IFD data will be fetched directly from BOM’s public database and displayed for further analysis.

## Installation
1. **Download the extension files** (this repository).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will now be loaded in Chrome, and you can use it from the toolbar.

## Usage
1. Open the extension from the Chrome toolbar.
2. Enter the latitude and longitude coordinates in the input field (e.g., `-42.87555111366436, 147.3937423865089`).
3. Click **Fetch Data**.
4. The IFD data will be opened in a new tab, showing detailed rainfall information for the provided coordinates.

## Screenshots
### Example of the Interface:
Refer .png and .jpg attached in files

## Permissions
This extension requests the following permission:
- **activeTab**: This is used to open a new tab displaying the BOM IFD data based on user input. No data is collected or stored.

## License
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements or new features.
