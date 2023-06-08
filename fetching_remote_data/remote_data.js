const url = "https://docs.github.com/en/rest/guides/working-with-comments?apiVersion=2022-11-28";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

    .catch(error => {
        console.error('Error:',error)
    })