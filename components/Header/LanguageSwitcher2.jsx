import React, { useState } from "react";
import { FormControl, FormHelperText, Grid, MenuItem, Select } from "@mui/material";
import { useTranslation , useLanguageQuery} from "react-i18next";
// import Flagde from "/images/locales/de.png";
// import Flagen from "/images/locales/en.png";
//import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
import i18n from 'i18next';

const LanguageSwitcher2 = ()  => {
  const { t } = useTranslation();
  //const [query] = useLanguageQuery();


  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    // localStorage.setItem("lng", language);
    //setSelectedLang(language);
    i18n.changeLanguage(newLang); //change the language
    // window.location.reload();
  };
  return (
    <FormControl sx={{ m: 1, minHeight: 1 }} size="small">
      <Select value={i18n.language} onChange={handleLanguageChange}>
        <MenuItem value="de">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img alt="" src="/images/locales/de.png" height="25px" width="25px" />
            </Grid>
            <Grid item>Deutsch</Grid>
          </Grid>
        </MenuItem>
        <MenuItem value="en">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img alt="" src="/images/locales/en.png" height="25px" width="25px" />
            </Grid>
            <Grid item>English</Grid>
          </Grid>
        </MenuItem>
      </Select>
      { (
        <FormHelperText variant="standard" sx={{ fontSize: 12 }}>
          {t("common.selectLang", {})}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default LanguageSwitcher2;
=======
// import React, { useState } from "react";
// import { FormControl, FormHelperText, Grid, MenuItem, Select } from "@mui/material";
// //import { useTranslation } from "react-i18next";
// // import Flagde from "/images/locales/de.png";
// // import Flagen from "/images/locales/en.png";
// import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';


// const LanguageSwitcher2 = ()  => {
//   const { t } = useTranslation();
// 	const [query] = useLanguageQuery();


//   // const handleLanguageChange = (e) => {
//   //   const newLang = e.target.value;
//   //   // localStorage.setItem("lng", language);
//   //   //setSelectedLang(language);
//   //   i18n.changeLanguage(newLang); //change the language
//   //   // window.location.reload();
//   // };
//   return (
//     <FormControl sx={{ m: 1, minHeight: 1 }} size="small">
//       <Select value={i18n.language} onChange={handleLanguageChange}>
//         <MenuItem value="de">
//           <Grid
//             container
//             direction="row"
//             justifyContent="flex-start"
//             alignItems="center"
//             spacing={2}
//           >
//             <Grid item>
//               <img alt="" src="/images/locales/de.png" height="25px" width="25px" />
//             </Grid>
//             <Grid item>Deutsch</Grid>
//           </Grid>
//         </MenuItem>
//         <MenuItem value="en">
//           <Grid
//             container
//             direction="row"
//             justifyContent="flex-start"
//             alignItems="center"
//             spacing={2}
//           >
//             <Grid item>
//               <img alt="" src="/images/locales/en.png" height="25px" width="25px" />
//             </Grid>
//             <Grid item>English</Grid>
//           </Grid>
//         </MenuItem>
//       </Select>
//       { (
//         <FormHelperText variant="standard" sx={{ fontSize: 12 }}>
//           {t("common.selectLang", {})}
//         </FormHelperText>
//       )}
//     </FormControl>
//   );
// };

// export default LanguageSwitcher2;
