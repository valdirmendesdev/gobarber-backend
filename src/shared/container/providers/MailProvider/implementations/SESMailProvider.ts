import IMailProvider from '../models/IMailProvider';

export default class SESMailProvider implements IMailProvider {
  sendMail(to: string, body: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
