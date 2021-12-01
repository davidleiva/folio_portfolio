import React, { useEffect, useContext } from "react";

import GlobalContext from "../../context/GlobalContext";

import HeyRecruiter from "../HeyRecruiter";

const themeConfigDefault = {
  headerDark: false,
  bodyDark: false,
  footerDark: false,
};

const PageWrapper = ({ children, darkTheme = false, themeConfig = null }) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    if (darkTheme) {
      gContext.changeTheme({
        headerDark: true,
        bodyDark: true,
        footerDark: true,
      });
    } else {
      gContext.changeTheme({ ...themeConfigDefault, ...themeConfig });
    }
  }, []);

  return (
    <>
      {children}
      {/* <HeyRecruiter /> */}
    </>
  );
};

export default PageWrapper;
