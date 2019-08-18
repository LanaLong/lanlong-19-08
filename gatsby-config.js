module.exports = {
  siteMetadata: {
    title: "Awesome Blog", // Enter the title of your blog here
    author: "Matt Hagner", // Change this to your name
    description: "A really cool blog",
    social: [
      {
        name: "twitter",
        url: "twitter.com/_hagnerd"
      },
      {
        name: "github",
        url: "github.com/hagnerd"
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {
        contentPath: "content/posts", // the file path to your blog posts
        // basePath: "/", // the url for the root of your blog÷

        basePath: "/blog", // the url for the root of your blog
        assetPath: "content/assets", // the file path to your assets folder
        mdx: true // whether or not to configure mdx for you
      }
    }
  ]
};
