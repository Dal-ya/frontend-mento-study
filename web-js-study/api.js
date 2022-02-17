export async function fetchUser() {
  return await fetch('https://koreanjson.com/users')
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
}
