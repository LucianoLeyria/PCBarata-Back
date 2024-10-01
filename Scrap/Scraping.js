/*const axios = require('axios');
const cheerio = require('cheerio');

const scrapeMultipleSites = async (urls) => {
  const results = [];

  for (const url of urls) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Aquí pones la lógica de scraping
    const title = $('title').text(); // Obtener el título de la página
    results.push({ url, title });
  }

  return results;
};

const urls = [
  'https://example.com',
  'https://example.org',
  // Agrega más URLs aquí
];

scrapeMultipleSites(urls).then((data) => {
  console.log(data);
});


*/
