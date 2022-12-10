import { localMap } from "_/hooks/storeMap";
const INIT_HEADERS = [
  { id: -1, name: "Content-Type", value: "application/json" },
  { id: -2, name: "Accept", value: "application/json" },
  { id: -3, name: "Authentication", value: "Bearer #{TOKEN}" },
];
const INIT_OPTIONS = [
  { id: -1, name: "method", value: ["", "GET", "POST", "PUT", "DELETE"] },
  {
    id: -2,
    name: "content-type",
    value: ["", "application/json", "application/xml"],
  },
];
const INIT_PARAMS = [
  {
    id: -1,
    name: "TOKEN",
    value:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  },
];
const INIT_SERVICES = [
  {
    id: -1,
    icon: "calendar",
    name: "[W-CLOCK] Get Time",
    description: "Api para obtener la fecha actual",
    method: "GET",
    target: "http://worldclockapi.com/api/json/utc",
    path: "/now",
    headers: [],
    contentType: "",
    content: "",
    fetch: {},
  },
  //{ id: -2, icon: 'sign-in', name: '[AUTH] Login', description: 'Login token', method: 'GET', target: 'http://127.0.0.1:3000/api', path: '/auth/login', headers: [], contentType: '', content: '', fetch: {} },
  //{ id: -3, icon: 'sign-out', name: '[AUTH] Logout', description: 'Logout token', method: 'POST', target: 'http://127.0.0.1:3000/api', path: '/auth/logout', headers: [], contentType: '', content: '', fetch: {} }
];

const createStore = (KEY, INIT) => {
  let value = localMap.get(KEY, INIT);
  return {
    values: () => {
      value = localMap.get(KEY, INIT);
      return value;
    },
    findId: (id) => {
      id = parseInt(id);
      const data = value.find((it) => it.id === id);
      return data ? { ...data } : data;
    },
    create: (data = {}) => {
      data = { ...data };
      data.id = new Date().getTime();
      value = [...value, data];
      localMap.put(KEY, value);
      return data.id;
    },
    update: (id, data = {}) => {
      data = { ...data };
      id = parseInt(id);
      data.id = id;
      value = value.map((it) => (it.id === id ? data : it));
      localMap.put(KEY, value);
    },
    remove: (id) => {
      id = parseInt(id);
      value = value.filter((it) => it.id !== id);
      localMap.put(KEY, value);
    },
    bulk: (newValue) => {
      newValue = newValue
        .map((it) => ({ ...it }))
        .map((it) => {
          it.id = new Date().getTime();
          return it;
        });
      localMap.put(KEY, newValue);
      value = newValue;
    },
  };
};

export const headerStore = createStore("global-headers", INIT_HEADERS);
export const optionStore = createStore("global-options", INIT_OPTIONS);
export const paramStore = createStore("global-params", INIT_PARAMS);
export const serviceStore = createStore("global-services", INIT_SERVICES);

export const flashMemory = {
  put: () => {},
};
