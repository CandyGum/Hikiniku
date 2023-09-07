import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Top } from "./Top";
import { SendMoney } from "./SendMoney";

export const router = createBrowserRouter([
  { path: "/", element: <Top /> },
  { path: "SendMoney", element: <SendMoney /> },
]);