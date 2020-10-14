import { Request, Response } from 'express';
import { generate as generateShortId } from 'shortid';
import { getRepository } from 'typeorm';
import Url from './../models/Url';

export default {
  async create(request: Request, response: Response) {
    const { long_url } = request.body;
    const short_code = generateShortId();
    const clicks_count = 0;

    const urlRepository = getRepository(Url);
    const url = urlRepository.create({ short_code, long_url, clicks_count });
    const createdUrl = await urlRepository.save(url);

    return response.status(201).json(createdUrl);
  },

  async redirect(request: Request, response: Response) {
    const { short_code } = request.params;
    const urlRepository = getRepository(Url);
    const [url] = await urlRepository.find({ short_code });

    url.clicks_count = url.clicks_count + 1;

    await urlRepository.update(url.id, url);

    return response.redirect(url.long_url);
  },
};
