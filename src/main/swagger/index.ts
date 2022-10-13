import components from './components'

export default {
  openapi: '3.0.3',
  info: {
    title: 'API-Enfermagem',
    description: '',
    contact: {
      name: 'Sistema enfermagem',
      url: 'https://www.enfermagem.com.br',
      email: 'suporte@enfermagem.com.br'
    },
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:8085/api',
      description: 'Local Server'
    },
  ],
  components
}
