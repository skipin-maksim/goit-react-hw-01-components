import React from "react";

import usersList from "../data/user.json";
import Profile from "./Profile/Profile";

import Statistics from "./Statistics/Statistics";
import statisticalData from "../data/statistical-data.json";

const App = () => (
  <>
    <Profile users={usersList} />
    <Statistics title="Upload stats" stats={statisticalData} />
  </>
);

export default App;
