# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Neon Parcel Tracker

## 📌 Project Description

**Neon Parcel Tracker** is a cyberpunk-style parcel tracking application built with **React**, **Vite**, and **Redux Toolkit**.

The project is designed as a futuristic intergalactic delivery dashboard from the same fictional universe as **Cosmic Delivery App**.  
Users can load parcel tracking data, view delivery cards, filter parcels by status, and see how the interface reacts to asynchronous state changes.

The main goal of this homework project is to practice working with asynchronous actions in Redux using **createAsyncThunk**.

---

## 🌌 Project Theme

The application represents a neon cyberpunk parcel tracking system for an intergalactic delivery company.

Instead of a regular delivery dashboard, the project uses a futuristic interface with:

- neon cyberpunk visual style;
- glowing parcel cards;
- fictional space delivery destinations;
- tracking statuses;
- async loading state;
- error handling;
- filtering by parcel status.

---

## 🚀 Technologies Used

- React
- Vite
- Redux Toolkit
- React Redux
- createAsyncThunk
- JavaScript
- CSS
- JSONPlaceholder API

---

## ⚙️ Main Features

- Project initialized with Vite
- Redux store configured with Redux Toolkit
- Asynchronous data loading with `createAsyncThunk`
- Handling of async request states:
  - `pending`
  - `fulfilled`
  - `rejected`
- Components connected to Redux using:
  - `useDispatch`
  - `useSelector`
- Parcel filtering by status
- Loading and error messages
- Responsive cyberpunk UI
- Clean component and Redux file structure

---

## 📁 Project Structure

```bash
My-homework-45/
└── my-redux-app/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── ParcelCard.jsx
    │   │   └── TrackerDashboard.jsx
    │   ├── redux/
    │   │   ├── parcelsSlice.js
    │   │   └── store.js
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    └── README.md
```
---

## ⚙️ Installation and Launch
1. 🧠 Redux Logic
The application uses Redux Toolkit to manage global state.
The main Redux logic is located in:
```bash
src/redux/parcelsSlice.js
```
The async action is created with createAsyncThunk:
```bash
export const fetchParcels = createAsyncThunk(
  "parcels/fetchParcels",
  async (_, { rejectWithValue }) => {
    // API request logic
  }
);
```
The slice handles three request states:
```bash
.addCase(fetchParcels.pending)
.addCase(fetchParcels.fulfilled)
.addCase(fetchParcels.rejected)
```
This allows the UI to show different states depending on the request result:

- loading message while data is being fetched;
- parcel cards when data is loaded successfully;
- error message if the request fails.

---

## 🧩 Components
TrackerDashboard.jsx

Main dashboard component.

- It is responsible for:
- dispatching the async action;
- receiving parcel data from Redux;
- displaying loading and error states;
- filtering parcels by status;
- rendering parcel cards.
ParcelCard.jsx

Reusable component for displaying one parcel.

It shows:
- parcel code;
- parcel title;
- destination;
- status;
- ETA;
- short description.

---

## 🛠️ Installation and Running the Project

Clone the repository:
```bash
git clone https://github.com/MsMeow-jpg/My-homework-45.git
```
Go to the project folder:
```bash
cd My-homework-45/my-redux-app
```
Install dependencies:
```bash
npm install
```
Run the project locally:
```bash
npm run dev
```
Open the project in the browser:
```bash
http://localhost:5173
```
---

## 📦 Build

To create a production build, run:
```bash
npm run build
```
The build files will be generated in the dist folder.

---

## 🌐 Demo

Demo link:
```bash
https://my-homework-45.vercel.app/
```
---

## 🔗 Repository

GitHub repository:
```bash
https://github.com/MsMeow-jpg/My-homework-45
```
---

## ✅ Homework Requirements Covered
1. Correctness
- The project is initialized with Vite.
- Redux Toolkit is installed and configured.
- Asynchronous actions are implemented with createAsyncThunk.
- The app handles pending, fulfilled, and rejected states.
- UI updates correctly according to Redux state.
- The project runs without errors.
2. Code Quality
- Redux logic is separated into a dedicated redux folder.
- Components are separated into reusable files.
- Variables and functions use clear names.
- Code uses modern React and Redux Toolkit syntax.
- The structure is clean and easy to understand.
3. Documentation
- The project includes this README.md file.
- The README contains:
- project description;
- technologies used;
- installation instructions;
- project structure;
- Redux explanation;
- repository link;
- demo section.
4. Deployment

The project is ready to be deployed on:

- Vercel
- Netlify
For Vercel, the recommended settings are:
```bash
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```
---

## 📝 About This Project

This project was created as a homework assignment for practicing asynchronous Redux logic in a React application.

The main focus was not only to create a working app, but also to organize the code properly and make the interface visually interesting.

The result is a small cyberpunk parcel tracker where async Redux actions control the loading of intergalactic delivery data.
```bash
::contentReference[oaicite:1]{index=1}
```
---

## ✍️ Author

GitHub: MsMeow-jpg
---