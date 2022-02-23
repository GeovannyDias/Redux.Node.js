// import { createStore } from "redux";
// const createStore = require("redux").createStore;

// const actionIncremented = (cant) => {
//   return {
//     type: "@counter/incremented",
//     payload: cant, // payload: { cantidad: cant },
//   };
// };

const { createStore } = require("redux");
const { combineReducers } = require("redux");

// ACTIONS *************************************************************************************
const BUY_POKEMON = "BUY_POKEMON";
const RETURN_POKEMON = "RETURN_POKEMON";

const BUY_YOSHI = "BUY_YOSHI";
const RETURN_YOSHI = "RETURN_YOSHI";

const buyPokemonAction = (cant) => {
  return {
    type: BUY_POKEMON,
    payload: cant, // payload: { cantidad: cant },
  };
};

const returnPokemonAction = (cant) => {
  return {
    type: RETURN_POKEMON,
    payload: cant, // payload: { cantidad: cant },
  };
};

const buyYoshiAction = (cant) => {
  return {
    type: BUY_YOSHI,
    payload: cant, // payload: { cantidad: cant },
  };
};

const returnYoshiAction = (cant) => {
  return {
    type: RETURN_YOSHI,
    payload: cant, // payload: { cantidad: cant },
  };
};

const BUY_PS5 = "BUY_PS5";
const RETURN_PS5 = "RETURN_PS5";

const buyPs5Action = (cant) => {
  return {
    type: BUY_PS5,
    payload: cant,
  };
};

const returnPs5Action = (cant) => {
  return {
    type: RETURN_PS5,
    payload: cant,
  };
};

// REDUCERS *************************************************************************************
const defaultGamesState = {
  pokemon: 10,
  yoshi: 15,
};

const gamesReducer = (state = defaultGamesState, action) => {
  switch (action.type) {
    case BUY_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon - action.payload,
      };
    case RETURN_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon + action.payload,
      };

    case BUY_YOSHI:
      return {
        ...state,
        yoshi: state.yoshi - action.payload,
      };
    case RETURN_YOSHI:
      return {
        ...state,
        yoshi: state.yoshi + action.payload,
      };

    default:
      return state;
  }
};

const defaultConsolesState = {
  ps5: 30,
  switch: 25,
};

const consolesReducer = (state = defaultConsolesState, action) => {
  switch (action.type) {
    case BUY_PS5:
      return {
        ...state,
        ps5: state.ps5 - action.payload,
      };
    case RETURN_PS5:
      return {
        ...state,
        ps5: state.ps5 + action.payload,
      };

    default:
      return state;
  }
};

// STORE *************************************************************************************
const rootReducers = combineReducers({
  gamesReducer,
  consolesReducer,
});

const store = createStore(rootReducers);
// const store = createStore(gamesReducer);
// console.log("Initial State:", store.getState().gamesReducer);

console.log("Initial State:", store.getState());

store.subscribe(() => {
  console.log("change State:", store.getState());
});

// Enviar mensaje por "Action"

// store.dispatch(buyPokemonAction(3));
// store.dispatch(returnPokemonAction(2));

// store.dispatch(buyYoshiAction(10));
// store.dispatch(returnYoshiAction(2));


store.dispatch(buyPs5Action(10));
store.dispatch(returnPs5Action(2));