import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme : {
        themes : {
            light : {
                primary : '#333',
                white : '#ddd',
                snow : '#aaa',
                green : '#27ad60',
                blue : '53c5ea',
                dark : '#444'          }
        }
    }
});
