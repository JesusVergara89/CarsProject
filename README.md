# React.js App with SheetBest API

This project is a React.js application that demonstrates how to use the SheetBest API to perform CRUD (Create, Read, Update, Delete) operations. The app is designed as a learning tool to understand API interactions and incorporates the following technologies:

- **Redux**: For state management.
- **Axios**: For handling HTTP requests.
- **React Hook Form**: For form handling.

## Features
- Connects to a Google Sheets backend via the SheetBest API.
- Demonstrates all CRUD operations:
  - **Create**: Add new data to the spreadsheet.
  - **Read**: Retrieve data from the spreadsheet.
  - **Update**: Modify existing data in the spreadsheet.
  - **Delete**: Remove data from the spreadsheet.
- Uses Redux for efficient state management.
- Implements form validation and handling with React Hook Form.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- A Google Sheet with SheetBest API set up. Refer to the [SheetBest Documentation](https://sheet.best/docs/) to set up your API.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JesusVergara89/CarsProject
   cd your-repo
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your SheetBest API URL:
   ```env
   REACT_APP_SHEETBEST_URL=your-sheet-id
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Adding Data
1. Use the form on the app to input new data.
2. The form is managed by React Hook Form, ensuring validation.
3. When submitted, the data is sent to the SheetBest API using Axios and added to the Google Sheet.

### Viewing Data
1. The app fetches data from the Google Sheet via the SheetBest API on load.
2. Fetched data is stored in the Redux store and displayed in a table.

### Updating Data
1. Select a record to edit.
2. Use the form to modify the data.
3. Changes are sent to the SheetBest API and updated in the Google Sheet.

### Deleting Data
1. Click the delete button on a record.
2. The app sends a DELETE request to the SheetBest API.
3. The record is removed from the Google Sheet and Redux store.

## Folder Structure
```
src/
|-- components/        # Reusable React components
|-- store/
    |-- slices/
        |-- crudSlice.js # Redux slice for CRUD operations
    |-- index.js             # Redux slices and store configuration
|-- Car.js             # Main app component
|-- index.js           # Entry point
```

## Scripts
- **Start Development Server**: `npm start`
- **Build for Production**: `npm run build`
- **Test**: `npm test`

## Dependencies
- **React**: ^18.0.0
- **Redux**: ^4.2.0
- **React-Redux**: ^8.0.0
- **Axios**: ^1.0.0
- **React Hook Form**: ^7.0.0

## Future Improvements
- Add authentication for better security.
- Implement pagination for large datasets.
- Enhance error handling and user feedback.

## Learning Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [SheetBest Documentation](https://sheet.best/docs/)

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any questions or feedback, feel free to reach out:
- **Email**: jesusvergara890109@gmail.com
- **GitHub**: [github-username](https://github.com/JesusVergara89/)

