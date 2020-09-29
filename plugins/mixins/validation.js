import Vue from 'vuex';

const Validation = {
	install(Vue, options) {
		Vue.mixin({
			computed: {
				...mapGetters({
					errors: 'validation/errors'
				})
			}
		})
	}
}

Vue.use(Validation);