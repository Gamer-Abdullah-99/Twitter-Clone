export let data = {
  authUser: {
    // username: "abdullah",
    // email: "abdullah@gmail.com",
    // password: "123456",
  },
  users: [
    {
      username: "haider",
      email: "haider@gmail.com",
      password: "123456",
    },
    {
      username: "abdullah",
      email: "abdullah@gmail.com",
      password: "123456",
    },
    {
      username: "akram",
      email: "akram@gmail.com",
      password: "123456",
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case "SIGNUP_USER": {
      let usersClone = state.users.slice(0);
      usersClone.push(action.payload);
      console.log(state.users);
      return {
        ...state,
        users: usersClone,
      };
    }
    case "LOGIN_USER": {
      console.log(state.authUser)
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case "SIGNOUT_USER": {
      console.log(state.authUser)
      return {
        ...state,
        authUser: {},
      };
    }
    default:
      return state;
  }
}
