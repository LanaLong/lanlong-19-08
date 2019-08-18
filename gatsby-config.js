module.exports = {
  siteMetadata: {
    title: "Design Portfolio",
    author: "Lan Long",
    description: "Design Portfolio",
    social: [
      {
        name: "twitter",
        url: "twitter.com"
      },
      {
        name: "LanaLong",
        url: "github.com"
      }
    ]
  },
  plugins: [
    // {
    //   resolve: "gatsby-theme-blog",
    //   options: {
    //     contentPath: "content/posts", // the file path to your blog posts
    //     // basePath: "/", // the url for the root of your blog
    //     basePath: "/blog", // the url for the root of your blog
    //     assetPath: "content/assets", // the file path to your assets folder
    //     mdx: true // whether or not to configure mdx for you
    //   },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};
