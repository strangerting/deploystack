/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Best tools for launching your website - Deploystack',
    content: content
  });
};

// All other routes will be add with a loop in the server.js using the content Object
// Dictionary to store content for each section's card
var content = {
  'hosting': {
    'name': 'Hosting',
    'title': 'Best hosting options for your website - Deploystack',
    'description': "Your website needs home, preferably somewhere in the cloud. Check what options you have for different amount of monthly fee (starting from free).",
    'url': "/hosting",
    'background': 'bg-light-purple',
    'icon': 'hosting.svg'
  },
  'domain': {
    'name': 'Domain',
    'title': 'Best domain providers for your website - Deploystack',
    'description': "Your website needs a URL, so people can visit it. Check how much different domains cost (the common ones like .com but also the unusual ones like .pizza).",
    'hero_description': "Your website needs a URL, so people can visit it.<br>Check how much different domains cost (the common ones like .com but also the unusual ones like .pizza).",
    'url': "/domain",
    'background': 'bg-light-red',
    'icon': 'domain.svg'
  },
  'ssl': {
    'name': 'SSL certificate',
    'title': 'How to get a free SSL certificate? - Deploystack',
    'description': "If you don't want to be penalized by the search engines and you want your website to be more secured, you should get an SSL certificate (the basic ones are free!).",
    'url': "/ssl",
    'background': 'bg-dark',
    'icon': 'ssl.svg'
  },
  'monitoring': {
    'name': 'Monitoring',
    'title': 'Best free monitoring for your website - Deploystack',
    'description': "You don't need to worry if your website is still working when you sleep. There are automatic tools that will notify you when it's down or has some errors.",
    'url': "/monitoring",
    'background': 'bg-dark-yellow',
    'icon': 'monitoring.svg'
  },
  'analytics': {
    'name': 'Web analytics',
    'title': 'Best analytics tools for your website - Deploystack',
    'description': "See how users are interacting with your website. Check which browser or device is the most popular, what age are your visitors or how did they find your website.",
    'url': "/analytics",
    'background': 'bg-light-blue',
    'icon': 'analytics.svg'
  },
  'files-storage': {
    'name': 'Files storage',
    'title': 'Best files storage solution for your website - Deploystack',
    'description': "Most websites contains not only the text and simple icons, but also images, videos and files to download. Check how you can cheaply store them in the cloud.",
    'url': "/files-storage",
    'background': 'bg-light-green',
    'icon': 'files.svg'
  },
  'cdn': {
    'name': 'CDN',
    'title': 'Best CDN for your website - Deploystack',
    'description': "To speed up loading of your page, you can use a CDN to store all the files in different servers around the world and serve them faster to your users.",
    'url': "/cdn",
    'background': 'bg-light-blue',
    'icon': 'cdn.svg'
  },
  'errors': {
    'name': 'Error tracking',
    'title': 'Best error tracking tools for your website - Deploystack',
    'description': "Not all the bugs are caught with tests, so it's important to know when users are seeing errors. And there are better solutions than sifting through the logs.",
    'url': "/error-tracking",
    'background': 'bg-dark-yellow',
    'icon': 'errors.svg'
  },
  'emails': {
    'name': 'Sending emails',
    'title': 'How to send emails for free? - Deploystack',
    'description': "Sooner or later you realize that you need to communicate with users. Maybe you want to send them a newsletter or welcome them with a transactional email.",
    'url': "/emails",
    'background': 'bg-light-red',
    'icon': 'emails.svg'
  },
  'vc': {
    'name': 'Version Control',
    'title': 'Best free Version Control solutions for your website - Deploystack',
    'description': "Online code repositories allow you to share your code with other people or synchronize it between computers. And most of them offers unlimited public projects.",
    'url': "/version-control",
    'background': 'bg-light-purple',
    'icon': 'vc.svg'
  },
  'ci': {
    'name': 'Continuous Integration',
    'title': 'Best continuous integration tools for your website - Deploystack',
    'description': "With continuous integration tools, you can run automatic checks - like tests, linters and more - each time you push code to a git repository.",
    'url': "/continuous-integration",
    'background': 'bg-light-red',
    'icon': 'ci.svg'
  },
  'static': {
    'name': 'Static websites',
    'title': 'How to host static websites for free? - Deploystack',
    'description': "When you don't need a backend for your website, you can publish it as a static page. Static websites are cheap to host, so there are many free options.",
    'url': "/static-websites",
    'background': 'bg-dark-yellow',
    'icon': 'static.svg'
  },
  'cloud': {
    'name': 'Cloud computing',
    'title': 'Cloud computing platforms for your website - Deploystack',
    'description': "Sometimes a simple hosting and a domain are not enough. When you need a bunch of different tools, check out the cloud computing companies.",
    'hero_description': "Sometimes a simple hosting and a domain are not enough.<br>When you need a bunch of different tools, check out the cloud computing companies.",
    'url': "/cloud-computing",
    'background': 'bg-light-blue',
    'icon': 'cloud.svg'
  },
};

exports.content = content;
