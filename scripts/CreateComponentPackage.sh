#!/bin/bash

if [[ $# != 1 ]]; then
    echo "Need one arguments - package name"
    exit 2
fi

if [[ ! -d "packages" ]]; then
    echo "packages directory not found"
    exit 1
fi

pkgname=${1^}
echo "Creating package $pkgname ..."

lerna create "$pkgname"

cd packages/"$pkgname" || ( echo "Bad path"; exit 2 )
rm -rf __tests__
rm -rf lib

touch tsconfig.json
echo "{" > tsconfig.json
echo     "\"extends\": \"../../tsconfig.json\"," >> tsconfig.json
echo     "\"compilerOptions\": {" >> tsconfig.json
echo         "\"baseUrl\": \".\"," >> tsconfig.json
echo         "\"declarationDir\": \"build\"," >> tsconfig.json
echo         "\"declaration\": true" >> tsconfig.json
echo     "}," >> tsconfig.json
echo     "\"include\": [\"src\", \"src/$pkgname.stories.tsx\"]," >> tsconfig.json
echo     "\"exclude\": [\"build\"]" >> tsconfig.json
echo "}" >> tsconfig.json

touch rollup.config.mjs
echo "import { CommonConfig } from '@dv-monorepo-test/common-rollup-config';" > rollup.config.mjs
echo "export default CommonConfig;" >> rollup.config.mjs


mkdir src
touch src/index.ts
touch src/"$pkgname".css
touch src/"$pkgname".stories.tsx
touch src/"$pkgname".test.tsx
touch src/"$pkgname".tsx
touch src/"$pkgname".types.ts
yarn add react react-dom --dev
yarn add react react-dom --peer

cd ../../
yarn run prettier --write "packages/$pkgname/tsconfig.json"
yarn run prettier --write "packages/$pkgname/rollup.config.mjs"

node scripts/PreparePackageJson.js "$pkgname"
yarn run prettier --write "packages/$pkgname/package.json"
lerna bootstrap

echo "$pkgname created"
echo "Make it cool -_-"
