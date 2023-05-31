# expo-huddle01-example

## Install & Build
First, make sure you have EAS CLI installed: `npm install -g eas-cli`\
And then, login to your Expo account: `eas login`

## Method 1:

***Android***
> ```bash
> eas build --platform android --local --profile development
> ```
> After finish building, install generated `.apk` file on real device or emulator.

***iOS***
> ```bash
> eas build --platform ios --profile development
> ```
> Once you’ve lost focus on the project due to the long time EAS takes, you will suddenly receive a magical notification that your build is successful! 🥳 Open that link!\
> Download & unzip the .tar.gz file\
> Open your ios simulator and drag-n-drop the new App from the unzip into the simulator.


Once you have done the above steps, you are almost ready to run the app.
```bash
npx expo start --dev-client
```
You can try the "Fetch development servers" option after running the installed app.


## Method 2:
Run `npx expo run:android` or `npx expo run:ios` on the terminal. It will create a specific platform folder in the project and run it on the target.
