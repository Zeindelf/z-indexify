module.exports = {
  branches: [
    'release',
    {
      name: 'release-beta',
      prerelease: true,
    }
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {'type': 'feat', 'release': 'minor'},
          {'type': 'fix', 'release': 'patch'},
          {'type': 'ci', 'release': 'patch'},
          {'type': 'chore', 'release': 'patch'},
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'lib/**', 'esm/**'],
        message: 'chore(release): bump to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
