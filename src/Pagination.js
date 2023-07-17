import React from "react";
import { GlobalContext } from "./context";

const Pagination = () => {
  const {getPrevPage,getNextPage,page,nbPages} =GlobalContext()
  return (
    <>
      <div className="pagination-btn">

        <button onClick={() => getPrevPage()}>PREV</button>

        <p>{page+1} of {nbPages}</p>
        
        <button onClick={() => getNextPage()}>NEXT</button>

      </div>
    </>
  );
};

export default Pagination;
