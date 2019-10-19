module.exports = {
  siteMetadata: {
    title: 'Психолог Инна',
    description: 'Психолог, психоаналитик, сексолог - доступ к счастью тут.',
  },
  plugins: [
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ],
}
