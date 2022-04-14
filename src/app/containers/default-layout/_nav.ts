import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Equipe'
  },
  {
    name: 'Operadores',
    url: '/team/workers',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Desempenho',
    url: '/team/performance',
    iconComponent: { name: 'cilChart' }
  },
  // {
  //   name: 'Desempenho',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cilChart' }
  // },
  {
    name: 'Atividades',
    title: true
  },
  {
    name: 'Cadastrar Usuário',
    url: '/activity/create-user',
    iconComponent: { name: 'cilSmilePlus' }
  },
  {
    name: 'Criar Pedido',
    url: '/activity/create-order',
    iconComponent: { name: 'cil-clipboard' }
  },
  {
    name: 'Inserir Item no Pedido',
    url: '/activity/insert-item-order',
    iconComponent: { name: 'cil-playlist-add' }
  },
  {
    name: 'Components',
    title: true
  },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  }
];
