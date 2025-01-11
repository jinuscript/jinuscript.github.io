const owner = "jinuscript";
const repo = "jinuscript.github.io";
const baseURL = `https://api.github.com/repos/${owner}/${repo}/issues`;

export default async function fetchAllIssues() {
  try {
    const response = await fetch(baseURL);
    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      return;
    }

    return result;
  } catch (error) {
    console.error(error);
  }
}
