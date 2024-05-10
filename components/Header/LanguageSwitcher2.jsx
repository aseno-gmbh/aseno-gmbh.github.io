import React from "react";
import { FormControl, FormHelperText, Grid, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';

const LanguageSwitcher2 = ()  => {
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("lng", newLang);
    i18n.changeLanguage(newLang); //change the language
  };
  return (
    <FormControl size="small" sx={{ m: 1, minHeight: 1 }}  className="leading-tight text-black dark:text-white sm:leading-tight">
      <Select value={i18n.language} onChange={handleLanguageChange} className="leading-tight text-black dark:text-white sm:leading-tight">
        <MenuItem value="de" className="leading-tight text-black dark:text-white sm:leading-tight">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            className={"leading-tight text-black dark:text-white sm:leading-tight"}
          >
            <Grid item >
              <img alt="" src="/images/locales/de.png" height="22px" width="22px" />
            </Grid>
            
            {/* <Grid item><div className="leading-tight text-black dark:text-white sm:leading-tight">DE</div></Grid> */}
          </Grid>
        </MenuItem>
        <MenuItem value="en">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            className="leading-tight text-black dark:text-white sm:leading-tight"
          >
            <Grid item >
              <img alt="" src="/images/locales/en.png" height="22px" width="22px" />
            </Grid>
            
            {/* <Grid item><div className="leading-tight text-black dark:text-white sm:leading-tight">EN</div></Grid> */}
          </Grid>
        </MenuItem>
      </Select>
      
    </FormControl>
  );
};

export default LanguageSwitcher2;
