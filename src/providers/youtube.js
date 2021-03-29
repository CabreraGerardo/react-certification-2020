export async function searchByKeyword(search) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API}`
  ).catch(console.error);
  const vid = await res.json();
  console.log(vid);
  return vid;
}
