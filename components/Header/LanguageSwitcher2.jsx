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
    <FormControl size="small" className="bg-gray-2 dark:bg-dark-bg flex h-9 w-14 cursor-pointer items-center justify-center bg-white lg:!bg-transparent  dark:bg-dark dark:border-body-color text-black dark:text-white md:h-9 md:w-16">
    <Select 
      value={i18n.language}
      onChange={handleLanguageChange}
      className={`flex border-body-color bg-white py-0 px-0 dark:border-body-color dark:bg-dark text-black dark:text-white lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:inline-flex lg:py-10 lg:px-0`}
    >
      <MenuItem value="en" className="bg-gray-2 dark:bg-dark-bg flex h-9 w-14 cursor-pointer items-center justify-center bg-white  dark:bg-dark dark:border-body-color text-black dark:text-white md:h-9 md:w-16">
      <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Grid item >
              <img alt="" src="/images/locales/en.png" height="22px" width="22px" />
            </Grid>
      </Grid>
      </MenuItem>
      <MenuItem value="de" className="bg-gray-2 dark:bg-dark-bg flex h-9 w-14 cursor-pointer items-center justify-center bg-white  dark:bg-dark dark:border-body-color text-black dark:text-white md:h-9 md:w-16">
       <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Grid item >
              <img alt="" src="/images/locales/de.png" height="22px" width="22px" />
            </Grid>
      </Grid>
      </MenuItem>
      {/* Add more languages here */}
    </Select>
  </FormControl>
    // <FormControl size="small" sx={{ m: 1, minHeight: 1 }}  className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center rounded-full justify-center  text-black dark:text-white md:h-14 md:w-14">
    //   <Select value={i18n.language} onChange={handleLanguageChange} className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center  text-black dark:text-white md:h-14 md:w-14">
    //     <MenuItem value="de" className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center  text-black dark:text-white md:h-14 md:w-14">
    //       <Grid
    //         container
    //         direction="row"
    //         justifyContent="flex-start"
    //         alignItems="center"
    //         spacing={1}
    //         className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center  text-black dark:text-white md:h-14 md:w-14"
    //       >
    //         <Grid item className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center  text-black dark:text-white md:h-14 md:w-14" >
    //           <img alt="" src="/images/locales/de.png" height="22px" width="22px" />
    //         </Grid>
            
    //         {/* <Grid item><div className="leading-tight text-black dark:text-white sm:leading-tight">DE</div></Grid> */}
    //       </Grid>
    //     </MenuItem>
    //     <MenuItem value="en" className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center  text-black dark:text-white md:h-14 md:w-14">
    //       <Grid
    //         container
    //         direction="row"
    //         justifyContent="flex-start"
    //         alignItems="center"
    //         spacing={1}
    //         className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center  text-black dark:text-white md:h-14 md:w-14"
    //       >
    //         <Grid item >
    //           <img alt="" src="/images/locales/en.png" height="22px" width="22px" />
    //         </Grid>
            
    //         {/* <Grid item><div className="leading-tight text-black dark:text-white sm:leading-tight">EN</div></Grid> */}
    //       </Grid>
    //     </MenuItem>
    //   </Select>
      
    // </FormControl>
  );
};

export default LanguageSwitcher2;
