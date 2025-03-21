# Frontend for Customer Identity Reconciliation

This is the frontend application for the Customer Identity Reconciliation service. It allows users to input an email or phone number to identify linked contacts and view their search history.

## Features

- **Identify Linked Contacts**: Users can submit an email or phone number to find linked contacts.
- **Search History**: All search results are stored and displayed in a history section.
- **Responsive Design**: The application is fully responsive and works on all screen sizes.
- **Error Handling**: Proper error messages are displayed for invalid inputs or server errors.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React DOM**: For rendering React components in the browser.
- **http-proxy-middleware**: For proxying API requests to the backend server.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- Backend server running (ensure the backend is set up and running on [http://localhost:3000](http://localhost:3000)).

### Installation

1. Clone the repository (if not already cloned):

   ```bash
   git clone <repository-url>
   cd frontend
