import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import UserItems from "./pages/UserItems";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UserManagement />} />
          <Route path="/user/:id/items" element={<UserItems />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
