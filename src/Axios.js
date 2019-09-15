import axios from 'axios';

export default axios.create({
    baseURL: "https://starfall-cms-production.herokuapp.com/api/document/ryan_fernanda_portofolio/",
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer b19bc195cf188f93994b0ca87ecc41c1nY9xE5CmKz9qOtth36vKowJrcUleSAA8iulq1sKmAz7aIi0pS+iDIBNl3XOQyGU6'
    }
});