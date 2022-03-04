import React from "react";
import routes from "../constants/routes";

export const PageContext = React.createContext({ currRoute: routes.homeRoute });
