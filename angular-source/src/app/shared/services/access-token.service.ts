export class AccessTokenService {
  protected accessToken;

  set(accessToken: string) {
    this.accessToken = accessToken;
  }

  get() {
    return this.accessToken;
  }
}