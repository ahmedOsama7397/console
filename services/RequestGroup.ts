class RequestGroup {
  public group: any[] = [];

  push(data: {}) {
    this.group.push(data);
  }

  all() {
    return this.group;
  }
}

export { RequestGroup };
