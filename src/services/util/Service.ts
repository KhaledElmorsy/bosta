import { z } from 'zod';

export default class Service {
  path: string;

  constructor(path: string) {
    this.path = `https://tracking.bosta.co${path}`;
  }

  async _get<T extends z.ZodSchema>(
    url: string | URL,
    schema: T
  ): Promise<z.infer<T>> {
    const res = await fetch(url);
    const json = await res.json();
    if (!res.ok) {
      throw { status: res.status, body: json };
    }
    return schema.parse(json);
  }
}
