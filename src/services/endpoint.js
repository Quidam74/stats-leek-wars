export default {
  menu: {
    list: {method: 'GET', url: 'api/menu'},
    get: {method: 'GET', url: 'api/menu/:id'}
  },
  plat: {
    list: {method: 'GET', url: 'api/plat'},
    get: {method: 'GET', url: 'api/plat/:id'},
    byTypePlat: {method: 'GET', url: 'api/plat/bytype/:typePlatId'}
  },
  exploitation: {
    list: {method: 'GET', url: 'api/exploitation'},
    get: {method: 'GET', url: 'api/exploitation/:id'}
  },
  ingredient: {
    list: {method: 'GET', url: 'api/ingredient'},
    get: {method: 'GET', url: 'api/ingredient/:id'}
  },
  typePlat: {
    list: {method: 'GET', url: 'api/typePlat'}
  },
  message: {
    get: {method: 'GET', url: 'api/messages'},
    create: {method: 'POST', url: 'api/messages'}
  },
  weapons: {
    get: {method: 'GET', url: 'api/weapon/get-all'}
  },
  chips: {
    get: {method: 'GET', url: 'api/chip/get-all'}
  },
  constants: {
    get: {method: 'GET', url: 'api/constant/get-all'}
  }
}
