/* Destructuring is an efficient way to extract multiple
values from data that is stored in arrays or objects */
const language = ["JavaScript", "Java", "Ruby"];
// Destructuring assignment in arrays
const [language1, language2, language3] = language;
// Loop through them
for (let i = 0; i < 3; i++) {
  console.log(language[i]);
}
