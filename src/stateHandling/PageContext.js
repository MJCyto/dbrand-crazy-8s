import React from "react";
import routes from "../constants/routes";

const PageContext = React.createContext({ currRoute: routes.homeRoute });

export default PageContext;
