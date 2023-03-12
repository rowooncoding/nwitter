export default function Home() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
}
