<template>
	<div class="container">
		<h2>Register Page</h2>
		<form @submit.prevent="register">
			<div class="form-group">
				<label>Name</label>
				<input v-model="form.name" type="text" name="name" class="form-control" placeholder="Name">
			</div>
			<div class="form-group">
				<label>Email</label>
				<input v-model="form.email" type="email" name="email" class="form-control" placeholder="Email">
			</div>
			<div class="form-group">
				<label>Password</label>
				<input v-model="form.password" type="password" name="password" class="form-control" placeholder="Password">
			</div>
			<div class="form-group">
				<input type="submit" value="Register" class="form-control">
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			async register() {
				await this.$axios.post('/users', this.form);

				this.$auth.login({ data: this.form });

				this.$router.push({name: 'index'})
			}
		}
	}
</script>