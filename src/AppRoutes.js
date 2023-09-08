import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Top } from "./Top";
import { SendMoney } from "./SendMoney";
import { SelectMoney } from "./SelectMoney";

export const router = createBrowserRouter([
  { path: "/", element: <Top /> },
  { path: "SendMoney", element: <SendMoney /> },
  { path: "SelectMoney", element: <SelectMoney /> },
]);