type RequestMethods = "POST" | "GET" | "PUT" | "DELETE";

interface GETRequestParameters {
  key: string;
  method: RequestMethods;
  url: string;
  body?: any;
  query?: any;
  header?: any;
}

interface ServiceInterface {
  setKey: (key: string) => this;
  setMethod: (method: RequestMethods) => this;
  setHeaders: (headers: {}) => this;
  setBody: (body: Record<string, string>) => this;
  setQuery: (query: string) => this;
  setUrl: (url: string) => this;
  get: () => GETRequestParameters;
}

export { ServiceInterface, GETRequestParameters, RequestMethods };
