const PostFetch = async (url: string, body: string) => {
  const response = await fetch(`http://localhost:3001/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  });
  if (response.ok) {
    return true;
  } else {
    return false;
  }
}
export default PostFetch;