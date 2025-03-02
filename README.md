> git commit rules:

| action   | commit form                                    | example                                   |
| -------- | ---------------------------------------------- | ----------------------------------------- |
| hotfix   | hotfix/{branch short hash}: {your commit text} | hotfix/7d156e3: user profile view issues. |
| fix      | fix: {your commit text}                        | fix: radio toggle effect.                 |
| update   | update: {your commit text}                     | update: profile files.                    |
| features | feat: {your commit text}                       | feat: seller dashboards.                  |

> files naming:

```
P{name} - primary. (like a primary button > PButton).
S{name} - secondary. (like a secondary button > SButton).
T{name} - tertiary. (like a tertiary button > TButton).
ect... (quaternary, quinary, senary, septenary, octonary, nonary, and denary).
```

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
