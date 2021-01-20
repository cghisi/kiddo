module.exports = {
  // -- Prismic API endpoint
  // Determines which repository to query and fetch data from
  // Configure your site's access point here
  apiEndpoint: "https://saharandchristophe.cdn.prismic.io/api/v2",

  // -- Access Token if the repository is not public
  // Generate a token in your dashboard and configure it here if your repository is private
  accessToken:
    "MC5ZQVlHUFJFQUFDTUE5NlRN.XTrvv73vv73vv73vv73vv73vv73vv71gAO-_ve-_vXwafh_vv71tde-_vXjvv73vv70v77-977-9AO-_ve-_vVHvv70",

  // -- Link resolution rules
  // Manages links to internal Prismic documents
  // Modify as your project grows to handle any new routes you've made
  linkResolver: function (doc) {
    if (doc.type === "page") {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === "homepage") {
      return `/${doc.lang}`;
    }
    return "/";
  },

  // Additional helper function for Next/Link component
  hrefResolver: function (doc) {
    if (doc.type === "page") {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === "homepage") {
      return `/${doc.lang}`;
    }
    return "/";
  },
};
