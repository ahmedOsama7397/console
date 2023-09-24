import { RequestMethods, ServiceInterface } from "./ServiceInterface";
import config from "../config";

abstract class ServiceAbstract implements ServiceInterface {
  private key: string = "";
  private method: RequestMethods = "GET";
  private headers: {} = {};
  private body: Record<string, string> = {};
  private query: string = "";
  private url: string = "";
  protected base_url: string = ("http://" + config.dev.AUTH_URL) as string;
  [key: string]: any;

  setKey(key: string) {
    this.key = key;
    return this;
  }

  setMethod(method: RequestMethods): this {
    this.method = method;
    return this;
  }

  setHeaders(headers: {}): this {
    this.headers = headers;
    return this;
  }

  setBody(body: Record<string, string>): this {
    this.body = body;
    return this;
  }

  setQuery(query: string): this {
    this.query = query;
    return this;
  }

  setUrl(url: string): this {
    this.url = this.base_url + url;
    console.log(this.url);
    return this;
  }

  get() {
    const result: any = {};
    const properties = ["key", "method", "url", "body", "query", "headers"];
    properties.forEach((property) => {
      if (this[property]) {
        result[property] = this[property];
      }
    });

    return result;
  }
}

export { ServiceAbstract };
