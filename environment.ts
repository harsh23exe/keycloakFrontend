export const environment = {
    production: true,
    envName: 'local',
    keycloak: {
      issuer: 'http://localhost:8080/',

      realm: 'SpringBootKeycloak',
  
      // The SPA's id. 
      // The SPA is registerd with this id at the auth-serverß
      clientId: 'login-app',
    }
  };