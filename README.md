## React Demo

This sample Android app demonstrates how to use MBaas cloud platform APIs using Parse Java script SDK.

This sample covers:

* Using the Objects to store data.
* Using the Queries to retrive and update data.   

App features:

* Signup new user
* Login and logout user
* Listing of items like burgers and beverages retrieved from stored objects
* Details of each menu items
* Displays item's photo

## Running sample

1) Install node and npm.

2) Setup the MBaas server.  (Refer to http://code.huawei.com/crc/mbaas/mbaas-parse-server)  

3) Upload the sample data using the data/InsertData.py script.  (Ensure to change the Mbaas instance path in the script variable 'rest_api_base')

4) Download the react app demo code.

5) cd into directory 'mbaas-react-demo'

6) Install dependencies

		npm install
		
## Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a 
few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

1)  Install Android Studio
Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:  

```
    Android SDK
    Android SDK Platform
    Performance (Intel ® HAXM)
    Android Virtual Device  
```
    
Then, click "Next" to install all of these components.  


If the checkboxes are grayed out, you will have a chance to install these components later on.  

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.  


2)  Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 8.0 (Oreo) SDK in particular. 
Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".  

![Alt text](/pics/studio.png?raw=true "studio")

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.  

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the
Android 8.0 (Oreo) entry, then make sure the following items are all checked:  

```
    Android SDK Platform 26
    Google APIs Intel x86 Atom_64 System Image
```

![Alt text](/pics/sdk1.png?raw=true "sdk")  

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that
26.0.3 is selected.  

![Alt text](/pics/sdk2.png?raw=true "sdk")

Finally, click "Apply" to download and install the Android SDK and related build tools.  

![Alt text](/pics/confirm.png?raw=true "confirm")

## Create AVD(Andriod Virtual Device):

Click on Tools->AVD Manager.  

Click on Create Virtual Device.  

![Alt text](/pics/createAVD.png?raw=true "createAVD")

Select the "x86 Images" tab, then look for the Oreo API Level 26, x86_64 ABI image with a Android 8.0 (Google APIs) target.  

![Alt text](/pics/api.png?raw=true "api")
	

## Run Application from Android Studio.

1)  Change into directory 'mbaas-react-demo'

2)  Install dependency by running, 

```
npm install
npm install -g react-native-cli
```

3)  Package sample bundle by running

```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

4)  Launch Android Studio, open the project from 'mbaas-react-demo\android'

5)  Assume the emulator is setup previously, use the 'Run' menu to start the sample application.

	
## Run Application (Ensure you are behind the proxy)
	
cd into directory 'mbaas-react-demo'  

Change the Mbaas instance path in mbaas-react-demo\app\data\ParseUtil.js init method 'Parse.serverURL' variable.  

Install the React Native command line interface using below command.  

```
npm install -g react-native-cli
```

Run 'react-native run-android' command to launch the app.  

If DNS configuration is required to connect to parse instance from emulator, run the below command from Andriod Sdk emualtor path to launch the emulator and then run the app 
from andriod studio.

get the available avds list using below command

```
emulator -list-avds
```

run the emualtor

```
emulator -avd <avd name> -dns-server <DNSIP>
```


