import { useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import styles from "./FlickingSilder.module.css";
import usePosters from "../hooks/usePosters";

function FlickingSilder() {
  const { poster, isLoading, error } = usePosters("game");
  return (
    <div className={"container m-5 "}>
      <Flicking renderOnlyVisible={true} moveType="freeScroll" bound={true}>
        {poster.map((poster) => (
          <div className={styles.panel} key={poster.imdbID}>
            <img src={poster.Poster} alt={poster.Title} className="rounded" />
            <div>
              <h3>{poster.Title}</h3>
              <p>Year | {poster.Year}</p>
              <span>⭐⭐⭐⭐⭐ 3/5</span>
            </div>
          </div>
        ))}
      </Flicking>
    </div>
  );
}

export default FlickingSilder;
