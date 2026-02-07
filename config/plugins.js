module.exports = ({ env }) => ({
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
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('R2_ACCESS_KEY_ID'),
        secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
        region: env('R2_REGION', 'auto'), // R2 nutzt oft 'auto'
        params: {
          Bucket: env('R2_BUCKET'),
        },
        endpoint: env('R2_ENDPOINT'),
        s3ForcePathStyle: true,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
