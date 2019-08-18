# yarn add react react-dom gatsby

mkdir -p src/pages
touch src/pages/index.js

# yarn add gatsby-theme-blog

<!-- # yarn add @joshkennedy00/gatsby-theme-blog-remix -->
<!-- # yarn remove @joshkennedy00/gatsby-theme-blog-remix -->

touch gatsby-config.js
echo []

mkdir -p content/{posts,assets}

mv src/pages/index.js src/pages/\_index.js

!!!
TypeError: null is not an object (evaluating 'data.site')

mv src/pages/\_index.js src/pages/index.js
121§
!!!
(EnsureResources, ) TypeError: undefined is not an object (evaluating 'locationAndPageResources.pageResources.page')
===
date: "2019-08-18"
===

# Changing the base URL of our blog

basePath: "/blog"
mv src/pages/\_index.js src/pages/index.js

===
yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components

# yarn add gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem

yarn remove gatsby-theme-blog
yarn add gatsby-plugin-react-helmet react-helmet

- - - - - - - - - +
                  #LINKS:

## https://dev.to/hagnerd/using-your-first-gatsby-theme-hep

## https://dev.to/ekafyi/using-and-customizing-multiple-official-gatsby-themes-from-scratch-without-starter-sites-2441

=========================================
package.json
====
{
"name": "first-gatsby-theme",
"version": "1.0.0",
"license": "MIT",
"dependencies": {
"react": "...",
"react-dom": "...",
"gatsby": "...",
},
"scripts": {
"build": "gatsby build",
"start": "gatsby develop",
"clean": "gatsby clean"
}
}
=========================================
yarn start

=========================================
.gitignore
===
node_modules
.cache
public
=========================================
