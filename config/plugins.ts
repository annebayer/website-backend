export default ({env}) => {
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
            config: {
                provider: "strapi-provider-cloudflare-r2",
                providerOptions: {
                    accessKeyId: env("R2_ACCESS_KEY_ID"),
                    secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
                    endpoint: env("R2_ENDPOINT"),
                    params: {
                        Bucket: env("R2_BUCKET"),
                    },
                    pool: false,
                },
                actionOptions: {
                    upload: {},
                    uploadStream: {},
                    delete: {},
                },
            },
        },

    };
};
