import { config, fields, collection } from '@keystatic/core';

const sponsorCollection = (label: string, season: string) =>
  collection({
    label,
    slugField: 'name',
    path: `src/content/sponsors/${season}/*`,

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
        directory: `src/assets/sponsors/${season}`,
        publicPath: `../../../assets/sponsors/${season}/`,
      }),
    },
  });

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    sponsors2027: sponsorCollection(
      'Sponsors 2026–2027',
      '2026-2027'
    ),

    sponsors2026: sponsorCollection(
      'Sponsors 2025–2026',
      '2025-2026'
    ),

    sponsors2025: sponsorCollection(
      'Sponsors 2024–2025',
      '2024-2025'
    ),
  },
});