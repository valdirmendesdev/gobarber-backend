import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import { getMongoRepository, MongoRepository } from 'typeorm';
import Notification from '../schemas/Notification';

export default class NotificationRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  /**
   * create
   */
  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      content,
      recipient_id,
    });

    await this.ormRepository.save(notification);

    return notification;
  }
}
