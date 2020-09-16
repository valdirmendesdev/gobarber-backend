import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });
  it('should to be able to list the month availability from provider', async () => {
    const appointmentsInADay = 10;
    const hoursFirstAppointment = 8;
    const appointments = Array.from(
      { length: appointmentsInADay },
      (_, i) => i + hoursFirstAppointment,
    );

    appointments.map(async appointmentHour => {
      await fakeAppointmentsRepository.create({
        date: new Date(2020, 8, 1, appointmentHour, 0, 0),
        provider_id: 'user',
        user_id: 'user',
      });
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 8, 2, 8, 0, 0),
      provider_id: 'user',
      user_id: 'user',
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 9,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        {
          day: 1,
          available: false,
        },
        {
          day: 2,
          available: true,
        },
        {
          day: 3,
          available: true,
        },
      ]),
    );
  });
});
