module.exports = {
	siteMetadata: {
		title: 'Eric Pacuit',
		author: 'Eric Pacuit',
		description: 'My academic website',
		keywords: 'pacuit, modal logic, game theory, social choice  theory',
		docSite: 'https://docs.pacuit.org/',
		appSite: 'https://app.pacuit.org/',
		siteUrl: 'https://pacuit.org/'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/me4.jpg',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
 		`gatsby-plugin-jss`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
			  name: "data",
			  path: `${__dirname}/src/data`
			}
		  },  
		  {
			resolve: "gatsby-source-filesystem",
			options: {
			  name: "courses",
			  path: `${__dirname}/src/data/courses`
			}
		  },  
		  {
			resolve: "gatsby-source-filesystem",
			options: {
			  name: "publications",
			  path: `${__dirname}/src/data/publications`
			}
		  },  
		  {
			resolve: "gatsby-source-filesystem",
			options: {
			  name: "publications",
			  path: `${__dirname}/src/data/publications/journal`
			}
		  },  
		  {
			resolve: "gatsby-source-filesystem",
			options: {
			  name: "publications",
			  path: `${__dirname}/src/data/publications/chapter`
			}
		  },  
		  {
			resolve: "gatsby-source-filesystem",
			options: {
			  name: "publications",
			  path: `${__dirname}/src/data/publications/proceedings`
			}
		  },  
		  {
			resolve: "gatsby-source-filesystem",
			options: {
			  name: "manuscripts",
			  path: `${__dirname}/src/data/manuscripts`
			}
		  },  
		'gatsby-transformer-yaml',
		'gatsby-transformer-csv',
		'gatsby-transformer-remark',		  
		//`gatsby-plugin-sitemap`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		//'gatsby-plugin-offline',
	]
};


