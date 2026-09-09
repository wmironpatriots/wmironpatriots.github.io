import {
  config,
  fields,
  collection,
} from '@keystatic/core';

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

const robotCollection =
  collection({
    label: 'Robots',
    slugField: 'name',
    path: 'src/content/robots/*',

    schema: {
      name: fields.slug({
        name: {
          label: 'Robot Name',
        },
      }),

      year: fields.text({
        label: 'Year',
        description: 'For example, 2026–2027',
      }),

      game: fields.text({
        label: 'Game',
      }),

      description: fields.text({
        label: 'Description',
        multiline: true,
      }),

      image: fields.image({
        label: 'Robot Image',
        directory: 'src/assets/robots',
        publicPath: '../../assets/robots/',
      }),

      github: fields.url({
        label: 'GitHub Repository',
      }),

      cad: fields.url({
        label: 'CAD Link',
      }),
    },
  });

const miscAssets = collection({
  label: 'Misc Assets',
  slugField: 'name',
  path: 'src/content/assets/*',

  schema: {
    name: fields.slug({
      name: {
        label: 'Asset Name',
      },
    }),

    category: fields.select({
      label: 'Category',
      options: [
        { label: 'Branding', value: 'branding' },
        { label: 'Background', value: 'background' },
        { label: 'Outreach', value: 'outreach' },
        { label: 'Event', value: 'event' },
        { label: 'General', value: 'general' },
      ],
      defaultValue: 'general',
    }),

    description: fields.text({
      label: 'Description',
    }),

    image: fields.image({
      label: 'Image',
      directory: 'src/assets/misc',
      publicPath: '../../assets/misc/',
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

    robots: robotCollection,

    miscAssets,
  },
});
