module.exports = ({ env }) => ({
    // ...
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
            upload: {
                responsive_breakpoints: {
                    create_derived: false,
                    // width: 1000,
                    // height: 600

                },
                folder: env('CLOUDINARY_UPLOAD_FOLDER')
            },
            delete: {},
        },
    },
    // ...
});