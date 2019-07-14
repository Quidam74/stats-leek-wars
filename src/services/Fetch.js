import endpoint from './endpoint'

const baseUrl = 'https://leekwars.com/'

export default class Fetch {
  constructor () {
    this.weapons = ''
    this.chips = ''
    this.constants = ''
    this.effect = []
    this.getAll()
  }

  getAllEffect () {
    this.constants.forEach((elem, index) => {
      if (elem.name.indexOf('EFFECT_') === 0) {
        let effect = elem.name
        delete elem['name']
        this.effect[effect] = elem
      }
    })
  }

  getAll () {
    this.getAllConstant().then(() => {
      this.getAllWeapon()
      this.getAllChips()
    })
  }

  getAllWeapon () {
    this.fetch(endpoint.weapons.get).then((value) => {
      this.weapons = value.weapons
    })
  }

  getAllChips () {
    this.fetch(endpoint.chips.get).then((value) => {
      this.chips = value.chips
      this.sortChips()
    })
  }

  async getAllConstant () {
    this.fetch(endpoint.constants.get).then((value) => {
      this.constants = value.constants
      this.getAllEffect()
    })
  }

  sortChips () {
    console.log(this.chips)
    // this.chips.forEach((elem, index) => {
    // console.log(elem)
    // })
  }

  fetch (endpoint, params = {}) {
    return new Promise((resolve, reject) => {
      const options = {
        method: endpoint.method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }

      let url = endpoint.url

      if (url.includes(':')) {
        const allMatch = url.match(/:([A-zA-Z]*)/)
        if (allMatch) {
          const key = allMatch[1]
          if (params.hasOwnProperty(key)) {
            url = url.replace(allMatch[0], params[key])

            delete params[key]
          } else {
            console.error(`[Fetch] Attribute ${key} is missing !`)
          }
        }
      }

      url = baseUrl + url
      let body = ''

      if (options.method !== 'POST') {
        if (Object.keys(params).length > 0) {
          url += `?${Object.keys(params).map(key => {
            return `& ${key}=${params[key]}`
          })}`
        }
      } else {
        body = params
      }

      if (typeof body !== 'string') {
        body = JSON.stringify(body)
      }

      if (body && body.length > 0) {
        options.body = body
      }

      window.fetch(url, options).then(async result => {
        const res = await result.json()
        if (result.status >= 400) {
          reject(res)
        } else {
          resolve(res)
        }
      }).catch(error => {
        console.error('[Fetch:call]', error)
        reject(error)
      })
    })
  }
}

/*
function call (endpoint, params = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      method: endpoint.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    let url = endpoint.url

    if (url.includes(':')) {
      const allMatch = url.match(/:([A-zA-Z]*)/)
      if (allMatch) {
        const key = allMatch[1]
        if (params.hasOwnProperty(key)) {
          url = url.replace(allMatch[0], params[key])

          delete params[key]
        } else {
          console.error(`[Fetch] Attribute ${key} is missing !`)
        }
      }
    }

    url = baseUrl + url
    let body = ''

    if (options.method !== 'POST') {
      if (Object.keys(params).length > 0) {
        url += `?${Object.keys(params).map(key => { return `& ${key}=${params[key]}` })}`
      }
    } else {
      body = params
    }

    if (typeof body !== 'string') {
      body = JSON.stringify(body)
    }

    if (body && body.length > 0) {
      options.body = body
    }

    window.fetch(url, options).then(async result => {
      const res = await result.json()
      if (result.status >= 400) {
        reject(res)
      } else {
        resolve(res)
      }
    }).catch(error => {
      console.error('[Fetch:call]', error)
      reject(error)
    })
  })
}
*/
