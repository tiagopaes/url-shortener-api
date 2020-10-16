import { Request, Response } from 'express';

import CreateUrlUseCase from './../../../core/Url/UseCases/CreateUrl';
import GetUrlUseCase from './../../../core/Url/UseCases/GetUrl';
import UrlRepository from './../../../infrastructure/repositories/UrlRepository';
import UrlPresenter from './../presenters/UrlPresenter';

const urlRepository = new UrlRepository();

export default {
  async create(request: Request, response: Response) {
    const { long_url } = request.body;

    const createUrlUseCase = new CreateUrlUseCase(urlRepository);

    const url = await createUrlUseCase.create({ long_url });

    return response.status(201).json(UrlPresenter.render(url));
  },

  async redirect(request: Request, response: Response) {
    const { short_code } = request.params;

    const getUrlUseCase = new GetUrlUseCase(urlRepository);
    const url = await getUrlUseCase.getUrlAndIncrementClicksCount(short_code);

    return response.redirect(url.long_url);
  },
};
