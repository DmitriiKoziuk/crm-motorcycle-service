export class PageTitleService {
  protected title = '';

  set(value) {
    this.title = value;
  }

  get() {
    return this.title;
  }
}
