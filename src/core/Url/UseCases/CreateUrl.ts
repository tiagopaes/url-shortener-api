import { generate as generateShortId } from 'shortid';
import Url from '../UrlEntity';
import { IUrlRepository } from './../IUrlRepository';

interface CreateUrlDTO {
  long_url: string;
}

export default class CreateUrl {
  
  private repository: IUrlRepository;

  constructor(repository: IUrlRepository) {
    this.repository = repository;
  }

  async create(data: CreateUrlDTO): Promise<Url> {
    const { long_url } = data;
    const short_code = generateShortId();
    const clicks_count = 0;

    return await this.repository.create({ short_code, long_url, clicks_count });
  }
};
