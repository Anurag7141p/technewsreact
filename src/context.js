// Context Creation
// Provider
// Consumer lengthy
// useContext

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  page: 0,
  nbPages: 0,
  query: "css",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // to remove the post

  const removePost = (post_ID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: post_ID,
    });
  };

  // to search post

  const  searchPost=(searchQuery)=>{
    dispatch({
      type:"SEARCH_QUERY",
      payload:searchQuery
    })
  }

  // to get previous page & next page

  const getPrevPage=()=>{
    dispatch({
      type:"GET_PREVPAGE",
      // payload:
    })

  }

  const getNextPage=()=>{
    dispatch({
      type:"GET_NEXTPAGE"
    })

  }

  

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider value={{ ...state, removePost,searchPost,getPrevPage,getNextPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook creation

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, GlobalContext };
