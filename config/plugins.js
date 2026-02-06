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
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("R2_ACCESS_KEY_ID"),
      secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
      endpoint: env("R2_ENDPOINT"),
      region: "auto",
      params: {
        Bucket: env("R2_BUCKET"),
      },
    },
    responsiveDimensions: false,
  },
});
