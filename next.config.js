/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-robots')
    }

    return config
  },
	experimental: {
		images: {
			allowFutureImage: true
		}
	}
}

module.exports = nextConfig
