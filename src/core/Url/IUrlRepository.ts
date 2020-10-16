import Url from './UrlEntity';

export interface CreateUrlDTO {
  short_code: string,
  long_url: string,
  clicks_count: number
};

export interface IUrlRepository {
  create(data: CreateUrlDTO): Promise<Url>;

  getByShortCode(shortCode: string): Promise<Url>;

  create(data: CreateUrlDTO): Promise<Url>;

  update(url: Url): Promise<boolean>;
}
