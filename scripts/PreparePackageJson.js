const fs = require('fs');
const path = require('path');

if (process.argv.length != 3) {
    throw new Error('Need one arguments - package name');
}

const pkgName = process.argv[2];
const pkgJsonPath = path.resolve(`${__dirname}/../packages/${pkgName}/package.json`);
const pkgJsonBuf = fs.readFileSync(pkgJsonPath, 'utf-8');
const pkgJson = JSON.parse(pkgJsonBuf);

const updatedPkgJson = {
    name: pkgJson.name,
    version: pkgJson.version,
    description: pkgJson.description,
    keywords: pkgJson.keywords || [],
    author: pkgJson.author,
    homepage: pkgJson.homepage,
    license: pkgJson.license,
    main: 'build/index.js',
    module: 'build/index.es.js',
    files: ['build'],
    repository: pkgJson.repository,
    scripts: { build: 'rollup -c', prepublishOnly: 'yarn run build' },
    bugs: pkgJson.bugs,
    devDependencies: {
        ...pkgJson.devDependencies,
        '@don-vadimon/common-rollup-config': '^1.0.0',
    },
    peerDependencies: pkgJson.peerDependencies
};

fs.writeFileSync(pkgJsonPath, JSON.stringify(updatedPkgJson), { encoding: 'utf-8' });
