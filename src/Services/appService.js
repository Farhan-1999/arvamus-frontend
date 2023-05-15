import { ServerEnum } from "../ServerEnum";

export async function getAllTeachers() {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "get_all_teachers", {
      method: "GET",
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

export async function getAllStaff() {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "get_all_staff", {
      method: "GET",
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
export async function getUserById(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "get_user_by_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
      body: JSON.stringify(body),
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
export async function updateUser(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "update_info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
      body: JSON.stringify(body),
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
export async function changePassword(body) {
  return new Promise((resolve, reject) => {
    fetch(ServerEnum.API_URL + "change_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
      body: JSON.stringify(body),
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
