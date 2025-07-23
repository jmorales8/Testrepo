// async means that while this may get fed eventually, it wont right away until it gets called
async function fetchData() {
  try {
    // catch the response as data, not it isnt in json form yet
    const response = await fetch('http://localhost:3000/bruh');
    console.log("this is a response: ", response)

    // if this console.log is uncomented, then it will reult in an error because 
    // console.log("this is a promise that wont be fulffiled because it wont the request wont have time to finish:", response.json())
    if (!response.ok) throw new Error('Network response was not OK');
    const data = await response.json();
    // this logs the data in json format
    console.log(data);
    //we pass the entire json object to the dom without parsing it
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
