import i18n from '@/i18n';
import { Character } from '@/models';

export const welcome = (
  numberOfPerson: number,
  tea: string,
  guests: Character[],
) => [
    {
      text: i18n.t('welcome:waitingForGuests', { count: numberOfPerson }),
    },
    {
      text: i18n.t('welcome:preparingTeaSet', { tea: i18n.t(`tea:${tea}`).toLowerCase() }),
      action: 'showGuests',
    },
    {
      text: i18n.t('welcome:guestsArrived', {
        guestsNames:
          guests.length > 1 ? guests.reduce(
            (acc, guest, currentIndex) =>
              `${acc}${currentIndex === 0 || currentIndex === guests.length - 1
                ? ''
                : ','
              }${currentIndex === guests.length - 1 ? ` ${i18n.t('common:and')} ` : ' '}${guest.name
              }`,
            '',
          )
            : `${guests[0].name}`
      }),
    },
    {
      text: i18n.t('welcome:inviteGuests', { count: numberOfPerson }),
      action: 'nextScene',
    },
  ];
