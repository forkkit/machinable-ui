import axios from 'axios';
import Statics from '../Statics';

const API_HOST = Statics.API_HOST;

class MachinableClient {
    resources() {
        var GET_RESOURCES = API_HOST + "/resources/"

        return {
            list: function(success, error) {
                axios.get(GET_RESOURCES, {})
                    .then(success)
                    .catch(error);
            }
        }
    }
}

export default new MachinableClient();