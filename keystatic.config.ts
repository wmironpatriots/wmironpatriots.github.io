import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    sponsors: collection({
      label: 'Sponsors',
      slugField: 'name',
      path: 'src/content/sponsors/*',

      schema: {
        name: fields.slug({
          name: {
            label: 'Sponsor Name',
          },
        }),

        tier: fields.select({
          label: 'Sponsor Tier',
          options: [
            { label: 'Platinum', value: 'platinum' },
            { label: 'Gold', value: 'gold' },
            { label: 'Silver', value: 'silver' },
            { label: 'Bronze', value: 'bronze' },
          ],
          defaultValue: 'bronze',
        }),

        website: fields.url({
          label: 'Website',
        }),

        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/sponsors',
          publicPath: '../../assets/sponsors/',
        }),

        active: fields.checkbox({
          label: 'Current Sponsor',
          defaultValue: true,
        }),
      },
    }),
  },
});