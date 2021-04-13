const siteMetadata = {
    title: `My Gatsby Blog`,
    description: `This is my coding blog.`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl: `https://dummyurl.com/`,
    authorName: `Ben Adam`,
    twitterUsername: `@mcBenny`,
    siteLanguage: `en-AU`,
    siteLocale: `en_AU`
};

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-theme-ui`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkplugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 640,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/`,
                name: `content`
            }
        }
    ]
};
