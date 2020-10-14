import { Request, Response } from 'express';
import { generate as generateShortId } from 'shortid';
import { getRepository } from 'typeorm';
import Url from './../models/Url';

export default {
  async create(request: Request, response: Response) {
    const { long_url } = request.body;
    const code = generateShortId();
    const short_url = `http://localhost:3333/${code}`;
    const clicks_count = 0;

    const urlRepository = getRepository(Url);
    const url = urlRepository.create({
      code,
      long_url,
      short_url,
      clicks_count,
    });
    const createdUrl = await urlRepository.save(url);

    return response.status(201).json(createdUrl);
  },

  async redirect(request: Request, response: Response) {
    const { code } = request.params;
    const urlRepository = getRepository(Url);
    const [url] = await urlRepository.find({ code });

    url.clicks_count = url.clicks_count + 1;

    await urlRepository.update(url.id, url);

    return response.redirect(url.long_url);
  }
};
