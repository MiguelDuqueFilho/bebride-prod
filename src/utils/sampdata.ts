import { PlanType, DepositionItem } from '../interfaces';

export const PlanTypes: PlanType[] = [
  {
    id: 1,
    title: 'Assessoria do Dia',
    resume:
      'Nossa Assessoria do Dia foi pensada com muito carinho para atender os noivos no dia do seu evento.',
    icon: 'GoChecklist',
    url: '/advice_day',
    show: false
  },
  {
    id: 2,
    title: 'Assessoria Final',
    resume:
      'O serviço de assessoria final começa a 60 dias (2 meses) antes do evento.',
    icon: 'GoBook',
    url: '/advice_final',
    show: false
  },
  {
    id: 3,
    title: 'Assessoria Completa',
    resume:
      'Sinônimo de tranquilidade. Nossa Assessoria Completa é um serviço desenvolvido desde o início dos preparativos.',
    icon: 'GoCalendar',
    url: '/advice_completed',
    show: false
  },
  {
    id: 4,
    title: 'Consultoria',
    resume:
      'Nossa Consultoria é o serviço ideal para o casal que deseja planejar e organizar seu próprio casamento.',
    icon: 'GoBrowser',
    url: '/advice_consulting',
    show: false
  }
];

export const DepositionItens: DepositionItem[] = [
  {
    id: 3,
    eventId: 1,
    depositionTitle: 'As meninas são INCRÍVEIS',
    depositionDescription:
      'As meninas são INCRÍVEIS, fizeram do meu casamento o conto de fadas que eu sempre sonhei! Gratidão eterna pelo trabalho realizado, muita luz e sucesso para vocês! Foi incrível!',
    depositionFilename: '/images/deposition_3.jpg',
    uploadId: 1,
    depositionShow: true,
    updatedAt: '2020-07-26T23:01:31.000Z',
    Events: [
      {
        eventName: 'Amanda & Stephanie'
      }
    ]
  },
  {
    id: 2,
    eventId: 2,
    depositionTitle: 'O meu sonho se realizou... ',
    depositionDescription:
      'O meu sonho se realizou... Foi incrível! Isso porque os serviços da Be Bride no meu casamento foram fundamentais para que tudo acontecesse redondinho e realmente possibilitasse realizar os meus sonhos. Super recomendo! Casamento só dá para curtir de verdade se você souber que tudo está bem e que será maravilhoso. É isso que a Be Bride e todo seu pessoal faz! Amei! Super obrigada.',
    depositionFilename: '/images/deposition_2.jpg',
    uploadId: 3,
    depositionShow: true,
    updatedAt: '2020-07-12T18:34:05.000Z',
    Events: [
      {
        eventName: 'Valeria & Kailane'
      }
    ]
  },
  {
    id: 1,
    eventId: 3,
    depositionTitle: 'Vocês são maravilhosas ',
    depositionDescription:
      'INCRÍVEL como as meninas da Be Bride cuidaram do meu pedido de casamento com tanto carinho e cuidado! Vocês são maravilhosas e já se preparem porque quem vai organizar meu casamento completo são vocês! MARAVILHOSAS!',
    depositionFilename: '/images/deposition_1.jpg',
    uploadId: 2,
    depositionShow: true,
    updatedAt: '2020-07-12T18:33:04.000Z',
    Events: [
      {
        eventName: 'Caio & Raphael'
      }
    ]
  }
];
