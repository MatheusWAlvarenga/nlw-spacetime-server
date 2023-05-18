<h1 align="center">Spacetime Backend</h1>

<div align="center">
<img width="900" alt="Wallpaper" src="https://github.com/MatheusWAlvarenga/nlw-spacetime-web/assets/94935750/13f47ab4-786c-42a4-8a7c-7e071e0db69b">
</div>

<p align="center">The Spacetime Backend is the server-side component of the Spacetime project. It provides the necessary APIs and functionalities to manage data and handle requests from the frontend application. The backend is built using Node.js and utilizes SQLite as the database for data storage, with Prisma as the ORM (Object-Relational Mapping) tool.</p>

## Technologies Used

The Spacetime Backend incorporates the following technologies:

- Node.js: A JavaScript runtime environment for server-side development.
- Express.js: A minimalistic web application framework for Node.js, used for building the API endpoints.
- SQLite: A lightweight, file-based relational database management system.
- Prisma: A modern database toolkit and ORM for Node.js and TypeScript, providing an easy-to-use interface for interacting with the SQLite database.

## Features

The Spacetime Backend includes the following features:

- User authentication: Users can create accounts, log in, and log out securely.
- Moment management: Users can create, read, update, and delete moments in the Spacetime application.
- Data validation: Input data is validated to ensure consistency and accuracy.
- Authorization: Users can only access and modify their own moments.
- Error handling: Proper error handling and responses are implemented to provide a smooth user experience.

## Getting Started

To set up the Spacetime Backend locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/spacetime-backend.git`
2. Navigate to the project directory: `cd spacetime-backend`
3. Install the dependencies: `npm install`
4. Set up the SQLite database:
   - Create an empty SQLite database file (e.g., `spacetime.db`) in the project root directory.
   - Update the database connection configuration in the `prisma/.env` file.
5. Generate the Prisma client: `npx prisma generate`
6. Run database migrations: `npx prisma migrate dev`
7. Start the server: `npm start`

Make sure you have Node.js and npm installed on your machine before running the above commands.

## API Documentation

The Spacetime Backend API provides the following endpoints:

- `POST /auth/register`: Create a new user account.
- `POST /auth/login`: Log in with an existing user account.
- `POST /auth/logout`: Log out the current user.
- `GET /moments`: Get all moments for the authenticated user.
- `GET /moments/:id`: Get a specific moment by its ID.
- `POST /moments`: Create a new moment.
- `PUT /moments/:id`: Update a moment by its ID.
- `DELETE /moments/:id`: Delete a moment by its ID.

Refer to the API documentation or code comments for detailed information about request and response formats.

## Contributing

Contributions to the Spacetime Backend are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

Special thanks to the developers and contributors who have worked on the Spacetime Backend.

Feel free to explore the codebase and make it your own! If you have any questions or feedback, please don't hesitate to reach out.

Enjoy using the Spacetime Backend for managing your moments!
