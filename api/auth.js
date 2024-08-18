import api from "./axios.config";

class Auth {
  // login
  login(user) {
    /**
     * username: "mor_2314",
     * password: "83r5^_"
     */
    return api.post("/auth/login", user);
  }

  // register
  register() {
    /**
     * {
        email:'John@gmail.com',
        username:'johnd',
        password:'m38rmF$',
        name:{
            firstname:'John',
            lastname:'Doe'
        },
        address:{
            city:'kilcoole',
            street:'7835 new road',
            number:3,
            zipcode:'12926-3874',
            geolocation:{
                lat:'-37.3159',
                long:'81.1496'
            }
        },
        phone:'1-570-236-7033'
        }
     */
  }

  // logout
  logout() {}
}

export default new Auth();
