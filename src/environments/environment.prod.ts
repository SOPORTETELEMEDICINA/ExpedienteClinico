// Este es el usado en modo prod
export const environment = {
  production: true,
  client_secret: 'auth.testing',
  client_id: 'auth.testing',
  username: 'sysAdmin',
  grant_type: 'password',
  password: 'f08304c22fda01dceb2c9a80e8c566a5d93ce59baef0018c8e0d20f0d0d23d19',

  /*api_url: 'https://apps.telemedicina.lat:9111',
  socket_url: 'https://apps.telemedicina.lat:9111/refreshsocket',
  oauth_server: 'https://apps.telemedicina.lat:9111/auth/oauth/token',
  post_files: 'http://apps.telemedicina.lat:9114'*/
  /*  DESARROLLO 192.160.20.39 
  api_url: 'https://telemedicina.jonima.com.mx:9111',
  socket_url: 'https://telemedicina.jonima.com.mx:9111/refreshsocket',
  oauth_server: 'https://telemedicina.jonima.com.mx:9111/auth/oauth/token',
  post_files: 'http://telemedicina.jonima.com.mx:9114',
   */
  /*  UAT 192.160.20.210 
  api_url: 'https://telemedicina1.jonima.com.mx:9111',
  socket_url: 'https://telemedicina1.jonima.com.mx:9111/refreshsocket',
  oauth_server: 'https://telemedicina1.jonima.com.mx:9111/auth/oauth/token',
  post_files: 'http://telemedicina1.jonima.com.mx:9114',
   */
   /* Firma para ECE Esalud*/

  //  OSTOKENAPI:'MzE1NTNmNDgtOWNjOC00YWU2LWFjYmItMWNiOGU0MGEyYzc0',
  //  OSAPPID:'d1209eeb-e3a0-4b8d-bdeb-ac793406cf86',
  //  OSTEMPLATEGL:'546a65d1-377f-46d1-9cd6-7fcacaed82f2',
  //  OSTEMPLATEPA:'597888fe-4233-44e4-92fc-f020c1719198',
  //  OSTEMPLATEPE:'2fbafa0a-d23b-421d-831b-84d993de72b7',
  //  OSTEMPLATECO:'cb1aa499-e22f-4809-b533-ac1128475f05',


        /* CONSULTA EN LINEA O CCT  */
  

  OSTOKENAPI:'ZjhmMzRhYjEtZjZhZi00YzcwLTg2NjgtOGQ4NDdmNzVmZGRj',
  OSAPPID:'27c38509-75fc-4b99-8b9f-6be6fe186fbf',
  OSTEMPLATEGL:'4a3d0533-7889-44b5-b5b5-7435887e48da',
  OSTEMPLATEPA:'38cf9355-6d59-4f28-b934-f483e4750fef',
  OSTEMPLATEPE:'999afb11-3479-4c0a-b9f8-55f7a22f6709',
  OSTEMPLATECO:'9a5490a2-ab90-414b-899a-cdb33f36e240',

   
  // url_np:'https://ece.telemedicina.lat',
  // api_url: 'https://ece.telemedicina.lat:9111',
  // socket_url: 'https://ece.telemedicina.lat:9111/refreshsocket',
  // oauth_server: 'https://ece.telemedicina.lat:9111/auth/oauth/token',
  // post_files: 'http://ece.telemedicina.lat:9114',
  //  Instance_file:'ECE',
  
  url_np:'https://cct.telemedicina.lat',
  api_url: 'https://cct.telemedicina.lat:9211',
  socket_url: 'https://cct.telemedicina.lat:9211/refreshsocket',
  oauth_server: 'https://cct.telemedicina.lat:9211/auth/oauth/token',
  post_files: 'http://cct.telemedicina.lat:9214',
  Instance_file:'CCT',
  /**/
  /* */
  /* PRODUCCION PUEBLA */
  // api_url: 'https://puebla.telemedicina.lat:9111',
  // socket_url: 'https://puebla.telemedicina.lat:9111/refreshsocket',
  // oauth_server: 'https://puebla.telemedicina.lat:9111/auth/oauth/token',
  // post_files: 'http://puebla.telemedicina.lat:9114',
  
  /* PRODUCCION BC 
  url_np:'https://bajacalifornia.telemedicina.lat',
  api_url: 'https://bajacalifornia.telemedicina.lat:9211',
  socket_url: 'https://bajacalifornia.telemedicina.lat:9211/refreshsocket',
  oauth_server: 'https://bajacalifornia.telemedicina.lat:9211/auth/oauth/token',
  post_files: 'https://bajacalifornia.telemedicina.lat:9214',
*/
  //local
  // api_url: 'https://192.168.0.26:9211',
  // socket_url: 'https://192.168.0.26:9211/refreshsocket',
  // oauth_server: 'https://192.168.0.26:9211/auth/oauth/token',
  // post_files: 'https://bajacalifornia.telemedicina.lat:9214',

 
  /* PRODUCCION cct 
 

  /* PRODUCCION stre.red 
  api_url: 'https://stre.red:9111',
  socket_url: 'https://stre.red:9111/refreshsocket',
  oauth_server: 'https://stre.red:9111/auth/oauth/token',
  post_files: 'http://stre.red:9214',
  Instance_file:'STRE',


     /* CONSULTA EN LINEA 
  

  OSTOKENAPI:'ZjhmMzRhYjEtZjZhZi00YzcwLTg2NjgtOGQ4NDdmNzVmZGRj',
  OSAPPID:'27c38509-75fc-4b99-8b9f-6be6fe186fbf',
  OSTEMPLATEGL:'4a3d0533-7889-44b5-b5b5-7435887e48da',
  OSTEMPLATEPA:'38cf9355-6d59-4f28-b934-f483e4750fef',
  OSTEMPLATEPE:'999afb11-3479-4c0a-b9f8-55f7a22f6709',
  OSTEMPLATECO:'9a5490a2-ab90-414b-899a-cdb33f36e240',

  url_np:'https://expediente.consultaenlinea.mx', 
  api_url: 'https://expediente.consultaenlinea.mx:9111',
  socket_url: 'https://expediente.consultaenlinea.mx:9111/refreshsocket',
  oauth_server: 'https://expediente.consultaenlinea.mx:9111/auth/oauth/token',
  post_files: 'http://expediente.consultaenlinea.mx:9114',
  Instance_file:'EXP',

 
*/

  // ES_BC = si es BajaCalifornia NA si es normal
  navlogos: 'NA',
  // ES_PB = es de puebla NA = No aplica
  navigate:"NA",
  // EXT_DEV = es iframe externo en Tomcat EXT_PROD = Mismo Server
  navext: 'EXT_PROD'
};
