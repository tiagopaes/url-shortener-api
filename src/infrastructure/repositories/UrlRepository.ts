import { getRepository } from 'typeorm';

import { IUrlRepository, CreateUrlDTO } from './../../core/Url/IUrlRepository';
import Url from './../../core/Url/UrlEntity';

export default class UrlRepository implements IUrlRepository {
  create(data: CreateUrlDTO): Promise<Url> {
    const urlRepository = getRepository(Url);
    const url = urlRepository.create(data);
    return urlRepository.save(url);
  }

  async getByShortCode(shortCode: string): Promise<Url> {
    const urlRepository = getRepository(Url);
    const [url] = await urlRepository.find({ short_code: shortCode });

    return url;
  }

  async update(url: Url): Promise<boolean> {
    const urlRepository = getRepository(Url);
    const result = await urlRepository.update(url.id, url);

    return Boolean(result);
  }
}
