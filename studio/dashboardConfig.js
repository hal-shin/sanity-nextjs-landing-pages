export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61247ad2699879522b03d6a5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-spbmt2qo',
                  apiId: '9b8a430b-9b64-43b4-a70a-a9990f60b4f9'
                },
                {
                  buildHookId: '61247ad2a2527857f7933eac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gs4wvfq5',
                  apiId: 'b7b43fee-a7d3-4561-a405-6d0c2d52ae04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hal-shin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gs4wvfq5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
