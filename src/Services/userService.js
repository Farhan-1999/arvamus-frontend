import { ServerEnum } from "../ServerEnum";

export async function userSignUp(body) {
  try {
    const response = await fetch(ServerEnum.API_URL + "signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.status === 200) {
      const serverResponse = await response.json();
      if (serverResponse.status === false) {
        return null;
      }

      return response;
    } else {
      console.log("Error in signup");
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}

// user login
export async function userLogin(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
      body: body,
    })
      .then(async (res) => {
        if (res.status === 200) {
          resolve(await res.json());
        } else {
          reject("Bad gateway");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// update user info
export async function updateUserInfo(body) {
  try {
    const response = await fetch(ServerEnum.API_URL + "update_info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.ok) {
      console.log("Form submitted successfully!");
      return response;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}

// update user password
export async function updateUserPassword(body) {
  try {
    const response = await fetch(ServerEnum.API_URL + "change_password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.ok) {
      console.log("Form submitted successfully!");
      return response;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}

// forget password
export async function forgetPassword(body) {
  try {
    const response = await fetch(ServerEnum.API_URL + "forget_password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.ok) {
      console.log("Form submitted successfully!");
      return response;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}
