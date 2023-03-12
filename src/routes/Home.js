import { dbCollection, dbService } from "\bfBase";
import { getDocs, query } from "firebase/firestore";

import { useEffect, useState } from "react";
import { dbAddDoc } from "../fBase";

export default function Home() {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const dbNweets = await getDocs(dbCollection(dbService, "nweets"));
    dbNweets.forEach((document) => console.log(document.data()));
  };
  useEffect(() => {
    getNweets();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbAddDoc(dbCollection(dbService, "nweets"), {
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
