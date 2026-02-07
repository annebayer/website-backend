export default ({ env }) => {
  console.log('UPLOAD PROVIDER CONFIG:', {
    endpoint: env('R2_ENDPOINT'),
    bucket: env('R2_BUCKET'),
  });

  return {
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
        s3Options: {
          credentials: {
            accessKeyId: env('R2_ACCESS_KEY_ID'),
            secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          },
          endpoint: env('R2_ENDPOINT'),
          region: 'auto',
          forcePathStyle: true,
        },
        params: {
          Bucket: env('R2_BUCKET'),
        },
      },
    },
  };
};
