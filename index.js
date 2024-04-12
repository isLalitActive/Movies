const fetchData = async (searchData) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "395e7083",
      //i: "tt0848228",
      s: searchData,
    },
  });
  //console.log(response.data.Search);
  return response.data.Search;
};

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  for(let movie of movies) {
    let div = document.createElement('div');
    div.innerHTML = `
      <img src="${movie.Poster}"/>
      <h1>${movie.Title}</h1>
    `;
    document.querySelector('#target').appendChild(div);
  }
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 500));
