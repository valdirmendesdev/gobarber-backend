import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;
describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 8, 15, 12).getTime();
    });
    const appointment = await createAppointment.execute({
      date: new Date(2020, 8, 15, 13),
      provider_id: '123456',
      user_id: '654321',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 8, 16, 13);

    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 8, 15, 12).getTime();
    });

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123456',
      user_id: '654321',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123456',
        user_id: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 8, 14, 23).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 8, 10, 11),
        provider_id: '123456',
        user_id: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 8, 15, 22).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 8, 15, 23),
        provider_id: '123456',
        user_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to create an appointment before 8am or after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 8, 14, 22).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 8, 15, 7),
        provider_id: '123456',
        user_id: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2020, 8, 15, 18),
        provider_id: '123456',
        user_id: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
