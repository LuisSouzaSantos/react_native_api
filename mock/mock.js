
import carro from '../assets/carro.png';
import camionete from '../assets/camionete.png';
import moto from '../assets/moto.png';
import caminhao from '../assets/caminhao.png';

const data = [
    {
        id: 1,
        photo: carro,
        information: "Carro",
        screen: "Car"
    },
    {
        id: 2,
        photo: camionete,
        information: "Camionete",
        screen: "Van"
    },
    {
        id: 3,
        photo: moto,
        information: "Moto",
        screen: "Motorcycle"
    },
    {
        id: 4,
        photo: caminhao,
        information: "Caminhão",
        screen: "Truck"
    }
]

const users = [
    {
        id: 1,
        nome: "Luis Gustavo de Souza",
        ra: "082190041",
        username: "luis@hotmail.com",
        password: "123456",
        color: "#DB4690"
    },
    {
        id: 2,
        nome: "Igor Nunes",
        ra: "082180001",
        username: "igor@hotmail.com",
        password: "123456",
        color: "#F07DBC"
    },
    {
        id: 3,
        nome: "Guilherme Harich",
        ra: "082180014",
        username: "harich@hotmail.com",
        password: "123456",
        color: "#DB46903"
    },
    {
        id: 4,
        nome: "Priscila Alves",
        ra: "082180023",
        username: "priscila@hotmail.com",
        password: "123456",
        color: "#F07DBC"
    }
]

export { users, data };