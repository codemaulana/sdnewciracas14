/** @type {import(`next-sitemap`).IConfig} */

module.exports = {
  siteUrl: "https://sdnciracas14.sch.id",
  generateRobotsTxt: true,
  exclude: ["/login", "/dashboard", "/dashboard/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/login", "/dashboard"] },
    ],
  },
};
