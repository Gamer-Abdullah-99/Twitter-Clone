export let data = {
  authUser: {},
  allTweets: []
};

export function reducer(state, action) {
  switch (action.type) {
    case "AUTH_USER": {
      console.log(state.authUser);
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case "SIGNOUT_USER": {
      console.log(state.authUser);
      return {
        ...state,
        authUser: {},
      };
    }
    case "ALL_TWEETS": {
      console.log(state.allTweets)
      state.allTweets.push(action.payload);
      return {
        ...state,
        // allTweets: action.payload,

      };
    }

    default:
      return state;
  }
}
