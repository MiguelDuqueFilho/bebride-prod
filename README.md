# inicio refazendo para aprender

## inicio

```cmd
    yarn create next-app bebride-prod
    yarn add typescript -D
    yarn add @types/react @types/react-dom @types/node -D
    touch tsconfig.json
```
 dados do tsconfig.json
```json
   {
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

```
eslint

```cmd
yarn add eslint -D
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn run eslint --init

yarn run v1.22.10
$ /Users/miguelduquefilho/Desktop/DevNext/bebride-prod/node_modules/.bin/eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser, node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
✔ Would you like to install them now with npm? · No / Yes
Successfully created .eslintrc.json file in /Users/miguelduquefilho/Desktop/DevNext/bebride-prod
✨  Done in 251.94s.

yarn add --dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

## prettier

```cmd
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
```

## Material-Ui

```cmd
yarn add @material-ui/core
yarn add @material-ui/icons
yarn add @material-ui/lab
```
