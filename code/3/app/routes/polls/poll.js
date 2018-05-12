import Ember from 'ember';

export default Ember.Route.extend({
 model(params) {
    const id = params.poll_id;
    const store = this.get('store');
    return store.getPollById(id);
  },


  store: Ember.inject.service()
});