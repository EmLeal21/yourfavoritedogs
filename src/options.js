import { apiKey } from "./env";

export const dogOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  },
};


export const deleteDogOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      redirect: 'follow'
    },
  };
  

  export const PostDogOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    
  };
  