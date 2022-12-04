const key = '2ebc0d7802d3627912a459099eea6bdc'

const requests = {
requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
};

export default requests;

