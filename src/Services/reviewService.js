import { ServerEnum } from "../ServerEnum";

export async function getReviewByRevieweeEmailAndReviewerId(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "get_review_by_reviewee_email_and_reviewer_id", {
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

export async function giveReview(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "give_review", {
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
export async function updateReview(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "update_review", {
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
export async function getReviewAndRatingByReviewer(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "get_reviews_and_ratings_by_reviewer", {
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
export async function getReviewAndRatingOfReviewee(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "get_reviews_and_ratings_of_reviewee", {
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
