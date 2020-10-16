import Url from './../../../core/Url/UrlEntity';

export default {
  render(url: Url) {
    return {
      id: url.id,
      short_code: url.short_code,
      long_url: url.long_url,
      clicks_count: url.clicks_count,
    };
  },

  renderMany(urls: Url[]) {
    return urls.map((url) => {
      return {
        id: url.id,
        short_code: url.short_code,
        long_url: url.long_url,
        clicks_count: url.clicks_count,
      };
    });
  },
};
