import { dbCollection, dbService } from "\bfBase";

import { useState } from "react";
import { dbAddDoc } from "../fBase";

export default function Home() {
  const [nweet, setNweet] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dbAddDoc(dbCollection(dbService, "nweets"), {
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
}
