import axios from "axios";

export default class Http {
  //static server = 'http://localhost:3000';
  static server = "http://34.69.108.162/";

  static async login(data) {
    const response = await axios
      .post(Http.server + "login", data)
      .then((res) => res.data);
    return response;
  }


  static async registrar(data) {
    const response = await axios
      .post(Http.server + "usuario", data)
      .then((res) => res.data);
    return response;
  }
  
  
   static async rebajar(data) {
    const response = await axios
      .post(Http.server + "productoUpdate", data)
      .then((res) => res.data);
    return response;
  }
  
  
}

/**
 * admin 10
 * vecino 11
 * anonimo 12
 * muni 13
 */
/**
[
    {
        "id_usuario": 6,
        "usuario": "admin",
        "password": "admin",
        "id_tipo_usuario": 10
    },
    {
        "id_usuario": 7,
        "usuario": "usermuni",
        "password": "muni123",
        "id_tipo_usuario": 13
    }
]
[
    {
        "id_tipo_reporte": 4,
        "descripcion": "Baches en las calles"
    },
    {
        "id_tipo_reporte": 5,
        "descripcion": "Actos de delincuencia"
    }
]
{
    "tipo_reporte": "Baches en las calles",
    "zona": "11",
    "hora_fecha_problema":"22-06-21",
    "estado":"",
    "usuario":""
}
 */
