const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curEle) => curEle.objectID !== action.payload),
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "GET_PREVPAGE":
      let pageNum = state.page;

      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = pageNum - 1;
      }

      return {
        ...state,
        page: pageNum,
      };

    case "GET_NEXTPAGE":
      let pageNumIncr = state.page + 1;
      if (pageNumIncr >= state.nbPages) 
      {
        pageNumIncr = 0;
      }
      return {
        ...state,
        page: pageNumIncr,
      };

    default:
  }
  return state;
};

export default reducer;
