const npsUtils = require('nps-utils');

module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @nativescript/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@nativescript': {
      // @nativescript/simple
			'simple': {
				build: {
					script: 'nx run simple:build.all',
					description: '@nativescript/simple: Build',
				},
			},
			// @nativescript/mytest
			'mytest': {
				build: {
					script: 'nx run mytest:build.all',
					description: '@nativescript/mytest: Build',
				},
			},
			// @nativescript/others
			'others': {
				build: {
					script: 'nx run others:build.all',
					description: '@nativescript/others: Build',
				},
			},
			// @nativescript/input-textfield
			'input-textfield': {
				build: {
					script: 'nx run input-textfield:build.all',
					description: '@nativescript/input-textfield: Build',
				},
			},
			'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'simple': {
				script: 'nx run simple:focus',
				description: 'Focus on @nativescript/simple',
			},
			'mytest': {
				script: 'nx run mytest:focus',
				description: 'Focus on @nativescript/mytest',
			},
			'others': {
				script: 'nx run others:focus',
				description: 'Focus on @nativescript/others',
			},
			'input-textfield': {
				script: 'nx run input-textfield:focus',
				description: 'Focus on @nativescript/input-textfield',
			},
			reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
