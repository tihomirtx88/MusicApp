export const saveUser = (user) => {
    if (user.accessToken) {
      localStorage.setItem(`user`, JSON.stringify(user));
    }
  }
  
  export const removeUser = () =>{
    localStorage.removeItem(`user`);
  }
  
  export const getUser = () => {
    let seriallizeduser = localStorage.getItem(`user`);
  
    if (seriallizeduser) {
      let user = JSON.parse(seriallizeduser);
  
      return user;
    }
  }
  
  export const getToken = () =>{
    return getUser()?.accessToken;
  }