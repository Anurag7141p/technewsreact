import React from "react";
import { GlobalContext } from "./context";

const Stories = () => {
  const { hits, page, isLoading, removePost } = GlobalContext();

  if (isLoading) {
    return <h1>Loading..... </h1>;
  }

  return (
    <>
      {/* <h1>MY tech news post</h1> */}
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, num_comments, url, objectID } = curPost;
          return (
            <div className="card" key={objectID}>
              <div></div>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                <a href={url}>Read More</a>
                <a href="gi" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h3>{page+1}</h3>
      </div>
    </>
  );
};

export default Stories;
