/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // DATABASE
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: "auth",
        collection: "knupel_users",
        server: {
          address: "cluster0-shard-00-01.nu5bx.mongodb.net",
          port: 27017,
        },
        auth: {
          user: "stan",
          password: "stan",
        },
        extraParams: {
          replicaSet: "Cluster0-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
  ],
}
