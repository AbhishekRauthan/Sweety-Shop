import React from "react";
import Layout from "./src/components/layout/index";
import "./src/styles/global.css";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
