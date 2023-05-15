import { ServerEnum } from "../ServerEnum";

export async function giveRating(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "give_rating", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
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
export async function updateRating(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "update_rating", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
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
export async function getRatingByRevieweeEmailAndReviewerId(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "get_rating_by_reviewee_email_and_reviewer_id", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          const serverResponse = await res.json();
          if (serverResponse.status === false) {
            reject(serverResponse.responseMessage);
          } else {
            resolve(serverResponse);
          }
        } else {
          reject("Bad gateway");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
