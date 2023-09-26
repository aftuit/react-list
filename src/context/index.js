import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";

const ListContext = createContext();

const initialData = [
  {
    id: 1,
    name: "Farrux",
    age: 21,
    subscription: "subscribed",
    employment: true,
  },
  {
    id: 2,
    name: "Davron",
    age: 21,
    subscription: "Subscribed",
    employment: false,
  },
  {
    id: 3,
    name: "Faxriddin",
    age: 21,
    subscription: "Not subscribed",
    employment: true,
  },
  {
    id: 4,
    name: "Sarvar",
    age: 21,
    subscription: "Subscribed",
    employment: false,
  },
  {
    id: 5,
    name: "Kamol",
    age: 21,
    subscription: "Other",
    employment: true,
  },
];

const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(window.localStorage.getItem("list")) || initialData
  );
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") || 'dark');
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ListContext.Provider
      value={{ state, dispatch, theme, setTheme, editItem, setEditItem }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListProvider, ListContext };
