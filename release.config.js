module.exports = {
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {type: 'feat', release: 'minor'},
          {type: 'fix', release: 'minor'},
          {type: 'refactor', release: 'minor'},
          {type: 'docs', release: 'patch'},
          {type: 'style', release: 'patch'},
          {type: 'perf', release: 'patch'},
          {type: 'test', release: 'patch'},
          {type: 'build', release: 'patch'},
          {type: 'ci', release: 'patch'},
          {type: 'chore', release: 'patch'},
          {type: 'revert', release: 'patch'},
        ],
      },
    ],
    ['@semantic-release/release-notes-generator'],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file.'
      }
    ],
    '@semantic-release/npm',
    ['@semantic-release/github'],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
