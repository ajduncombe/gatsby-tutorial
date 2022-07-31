module.exports = {
  siteMetadata: {
    title: `Gatsby Tutorial`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: `blog`, path: `${__dirname}/blog` },
    },
    "gatsby-plugin-mdx",
  ],
};
