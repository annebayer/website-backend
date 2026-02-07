export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 9,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('R2_ACCESS_KEY_ID'),
      secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
      endpoint: env('R2_ENDPOINT'),
      region: 'auto',
      forcePathStyle: true, // 🔴 absolut notwendig für R2
      params: {
        Bucket: env('R2_BUCKET'),
      },
    },
  },
});
export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 9,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('R2_ACCESS_KEY_ID'),
      secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
      endpoint: env('R2_ENDPOINT'),
      region: 'auto',
      forcePathStyle: true,
      params: {
        Bucket: env('R2_BUCKET'),
      },
    },
  },
});
