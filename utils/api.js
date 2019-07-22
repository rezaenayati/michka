export const fetchUserFollower = async username => {
  const response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
  const {show_suggested_profiles , graphql} = await response.json();
  const {user} = graphql;
  const {edge_followed_by} = user;
  const {count} = edge_followed_by;
  console.log(count);
  return count ;
}
