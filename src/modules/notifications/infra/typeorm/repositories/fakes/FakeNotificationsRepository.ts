import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import Notification from '../../schemas/Notification';

export default class FakeNotificationsRepository
  implements INotificationsRepository {
  constructor(parameters) { }

  public async create(data: ICreateNotificationDTO): Promise<Notification> {
    throw new Error('Method not implemented.');
  }
}
