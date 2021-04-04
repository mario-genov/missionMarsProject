function article(mongoose) {
    const Schema = mongoose.Schema;

    const articleSchema = new Schema(
        {
            title: {
                type: String,
                required: true,
            },
            body: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
                validate: /^http?/,
            },
            userName: {
                type: String,
                required: true,
            }
        },
        { timestamps: true }
    );

    return mongoose.model('Article', articleSchema);
}

export default article;