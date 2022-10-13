// TODO: Fix the module, config is not proxying my API calls to the server
module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8081',
				changeOrigin: true,
			}
		}
	}
}