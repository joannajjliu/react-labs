import React from "react";
import { Item } from "../../models/movie.model";
import styles from "./details.module.scss";

export function details(item: Item) {
  return (
    <div className="detail-card">
      <h1 className={styles.title}> {item.original_title}</h1>
      <h2>Overview: </h2> {item.overview}
      <h2>Release Date: </h2> {item.release_date}
    </div>
  );
}
