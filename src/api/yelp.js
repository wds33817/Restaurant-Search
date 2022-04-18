import axios from "axios"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer zCSiwV6TmoWJl3yWUeJjMd7rqWEAoi8iO56fw6SYyhV73tsNuBvDnAai9SDceuhwWU3EYg9GRFeQQUq0uz1mYWfDHCfqk0GBqwqauCYi9izQf4Kes7-6aKK7T6xcYnYx"
    },
});