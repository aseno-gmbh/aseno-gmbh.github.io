const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  const repo = 'aseno-gmbh.github.io'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  output: 'export',
//   images: {
//     loader: 'custom',
//     loaderFile: './app/image.ts',
//   },
  experimental: {
    appDir: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig

// module.exports = {
//     // Set the target to serverless so that Next.js generates a static site
//     //target: 'serverless',

//     experimental: {
//         appDir: true,
//     },
//     // Define the environment variables for the application
//     env: {
//       API_BASE_URL: 'https://aseno.org/api'
//     },
  
//     // Define the routes for which static pages should be generated
//     // Here, we are generating pages for the home page and the blog page
//     exportPathMap: async function() {
//       const paths = {
//         '/': { page: '/' },
//         '/about': { page: '/about' }
//       };
  
//       // Add more paths here as needed
  
//       return paths;
//     }
//   };