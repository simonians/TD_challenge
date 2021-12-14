const supertest = require("supertest");
const {app, server} = require("../../index");
const api = supertest(app)
const {resetDataSet, insertCustomer} = require("../../util/util_tests/customers_util_tests")

const initialCustomers = [
    {
        name: "prueba1",
        lastname: "apellido_de_la_prueba1"
    },
    {
        name: "prueba2",
        lastname: "apellido_de_la_prueba_2"
    }
]

beforeEach(async () => {
    server.close()
    await resetDataSet();
    initialCustomers.forEach(async (customer) => {
        await insertCustomer(customer.name, customer.lastname);
    })
})


test('customers are returned as json', async () => {
    await api
        .get("/customers/v1/")
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 10000);


test('there are 2 customers', async () => {
    const response = await api.get("/customers/v1/")
    expect(response.body).toHaveLength(initialCustomers.length)
}, 10000);


test("any customer's name must be prueba1", async () => {
    const response = await api.get("/customers/v1/")
    const names = response.body.map(customer => customer.name)
    expect(names).toContain("prueba1")
}, 10000);

test("any customer's lastname must be apellido_de_la_prueba1", async () => {
    const response = await api.get("/customers/v1/")
    const lastnames = response.body.map(customer => customer.last_name)
    expect(lastnames).toContain("apellido_de_la_prueba1")
}, 10000);

test('create new customer', async () => {
    const newCustomer = {
        name: "newCustomer's name",
        lastname: "newCustomer's lastname"
    }
    await api.post("/customers/v1/").send(JSON.stringify(newCustomer))
    const response = await api.get("/customers/v1/")
    expect(response.body).toHaveLength(initialCustomers.length + 1)
        
}, 10000);

test('get customer by id', async () => {
    const response = await api.get(`/customers/v1/`)
    const id = response.body[0].id
    const customerSearched = await api.get(`/customers/v1/${id}`)
    expect(customerSearched.body.id).toBe(id)
})


afterAll(() =>{
    server.close()
})