import {IUrlRepository} from './../IUrlRepository';
import Url from '../UrlEntity';

export default class CreateUrl {
  
  private repository: IUrlRepository;

  constructor(repository: IUrlRepository) {
    this.repository = repository;
  }

  async getUrlAndIncrementClicksCount(shortCode: string): Promise<Url> {
    const url = await this.repository.getByShortCode(shortCode);
    
    url.clicks_count = url.clicks_count + 1;

    await this.repository.update(url);

    return url;
  }
}
