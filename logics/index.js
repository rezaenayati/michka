export const fetchUser = (username) => {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://api.twitter.com/1.1/users/show.json?user_id=870812911119347712");
  xhr.setRequestHeader("Authorization", "OAuth oauth_consumer_key=\"ziUG9xZPCKMAH9ggYfrbLRiQE\",oauth_token=\"870812911119347712-tbY6QIJJqMymC58RA1ifINm0MEFYnXn\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1551170182\",oauth_nonce=\"rOTwEAb3A3L\",oauth_version=\"1.0\",oauth_signature=\"xYMMd%2FEU4ZLVbYwtZwZfUK19%2BKs%3D\"");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "57bbc284-b2d4-4159-8d6b-4f29dee8ba4d");

  xhr.send(data);
  // console.log("In There!");
  console.log(data);
};
