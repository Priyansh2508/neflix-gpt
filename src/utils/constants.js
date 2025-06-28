export const LOGO =
"https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR=
"https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-701751695033499brrbuebohc.png";

export const API_OPTIONS={
    
   
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  }
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4";

export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hindi", name: "Hindi" },
  { code: "spanish", name: "Spanish" }
];



export const GENAI_KEY= process.env.REACT_APP_GENAI_KEY;

