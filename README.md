Here's a sample `README.md` file for your project:

```markdown
# Fruits List App

This is a simple project demonstrating how to send data from a React.js frontend (running on `localhost:3000`) to an Express.js backend (running on `localhost:5000`) using the `GET` method.

## Features

- Input box to add a fruit name on the frontend.
- Sends the fruit name to the backend via a `GET` request.
- Backend receives and logs the fruit name.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js

## Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- npm (v7 or higher)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/fruits-list-app.git
cd fruits-list-app
```

### Setup Frontend

1. Navigate to the `frontend` directory.

   ```bash
   cd frontend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### Setup Backend

1. Navigate to the `backend` directory.

   ```bash
   cd backend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the server.

   ```bash
   node server.js
   ```

   The backend will run on `http://localhost:5000`.

## Project Structure

```
fruits-list-app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # React entry point
│   ├── package.json
│
├── backend/
│   ├── server.js       # Express server
│   ├── package.json
```

## How It Works

1. **Frontend**:
   - Users can enter a fruit name in the input box.
   - When the button is clicked, a `GET` request is sent to `http://localhost:5000/add-fruit?name=<fruit-name>`.

2. **Backend**:
   - The Express server receives the request at `/add-fruit`.
   - It logs the fruit name to the console.

## Example Output

1. Enter "Apple" in the frontend input box and click the submit button.
2. The backend logs:

   ```bash
   Fruit received: Apple
   ```

## License

This project is licensed under the MIT License.

---

Feel free to contribute or suggest improvements!
```

### Notes:
1. Update the `git clone` URL with your actual repository URL.
2. Replace placeholders like `your-username` with your actual GitHub username or project details.
