export const fetchUserFollower = async username => {
  const response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
  const {show_suggested_profiles , graphql} = await response.json();
  const {user} = graphql;
  const {edge_followed_by} = user;
  const {count} = edge_followed_by;
  console.log(count);
  return count ;
}
export const fetchUserFullName = async username => {
  const response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
  const {show_suggested_profiles , graphql} = await response.json();
  const {user} = graphql;
  const {full_name} = user;
  console.log(full_name);
  return full_name ;
}

export const fetchUserPicUrlHd = async username => {
  const response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
  const {show_suggested_profiles , graphql} = await response.json();
  const {user} = graphql;
  const {profile_pic_url_hd} = user;
  console.log(profile_pic_url_hd);
  return profile_pic_url_hd ;
}
