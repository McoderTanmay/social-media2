export const baseUrl = "http://localhost:5000/"

export const postRequest= async (url, data)=>{
    const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
      });
      return response.json();
}

export const getRequest = async (url)=>{
    const response = await fetch(url);
    return response.json();
}