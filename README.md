<h1 align="center">Spacetime Mobile App</h1>

<div align="center">
<img width="900" alt="Wallpaper" src="https://github.com/MatheusWAlvarenga/nlw-spacetime-web/assets/94935750/13f47ab4-786c-42a4-8a7c-7e071e0db69b">
</div>

<p align="center">The Spacetime Backend is the server-side component of the Spacetime project. It provides the necessary APIs and functionalities to manage data and handle requests from the frontend application. The backend is built using Node.js and utilizes SQLite as the database for data storage, with Prisma as the ORM (Object-Relational Mapping) tool.</p>

## Technologies Used

The Spacetime Backend incorporates the following technologies:

- Node.js: A JavaScript runtime environment for server-side development.
- Fastify: A minimalistic web application framework for Node.js, used for building the API endpoints.
- SQLite: A lightweight, file-based relational database management system.
- Prisma: A modern database toolkit and ORM for Node.js and TypeScript, providing an easy-to-use interface for interacting with the SQLite database.

## Features

The Spacetime Mobile App includes the following features:

- User authentication: Users can create accounts, log in, and log out securely.
- Moment creation: Users can capture and create new moments using their mobile devices.
- Moment browsing: Users can browse and view their stored moments in a visually appealing format.
- Moment management: Users can edit, delete, and categorize moments for easy organization.
- Search and filter: Users can search and filter moments based on keywords, tags, or dates.
- Synchronization: Changes made on the mobile app are synced with the backend server to ensure data consistency across devices.

## Technologies Used

The Spacetime Mobile App is developed using the following technologies:

- React Native: A popular JavaScript framework for building cross-platform mobile applications.
- Expo: A platform and set of tools for building, deploying, and managing React Native applications.
- Redux: A predictable state container for JavaScript apps, used for managing application state.
- Axios: A promise-based HTTP client used for making API requests to the backend server.
- React Navigation: A navigation library for React Native, used for routing and navigating between screens.

## Getting Started

To get started with the Spacetime Mobile App, follow these steps:

1. Clone the repository: `git clone https://github.com/MatheusWAlvarenga/nlw-spacetime-server.git`
2. Navigate to the project directory: `cd nlw-spacetime-server`
3. Install the dependencies: `npm install`
4. Configure the API endpoint:
   - Open the `src/api/config.js` file.
   - Update the `BASE_URL` variable with the URL of the Spacetime Backend API.
5. Start the app: `npm start`
6. Follow the instructions provided by Expo to launch the app on an emulator, physical device, or web browser.

Make sure you have Node.js and npm installed on your machine before running the above commands. You also need to have the Expo CLI installed globally (`npm install -g expo-cli`).

## Folder Structure

The Spacetime Mobile App project has the following folder structure:

```
spacetime-mobile/
  ├── src/
  │   ├── api/                  # API integration and configuration
  │   ├── components/           # Reusable UI components
  │   ├── navigation/           # Navigation configuration
  │   ├── screens/              # Individual app screens
  │   ├── store/                # Redux store configuration
  │   ├── utils/                # Utility functions and helpers
  │   └── App.js                # App entry point
  └── ...
```

## Contributing

Contributions to the Spacetime Mobile App are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

Special thanks to Rocketseat and the team behind NLW for providing the inspiration and guidance for this project.

Feel free to explore the codebase and make it your own! If you have any questions or feedback, please don't hesitate to reach out. [Matheus Alvarenga](mailto:matheuswalvarenga@gmail.com)

Enjoy preserving and revisiting your memories with the NLW Project.
