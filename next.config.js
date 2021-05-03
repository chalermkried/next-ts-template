// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      });

      // Ref: https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack-config.ts
      config.optimization.splitChunks.cacheGroups.framework.test = /(?<!node_modules.*)[/\\]node_modules[/\\](preact\/compat)[/\\]/;
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
