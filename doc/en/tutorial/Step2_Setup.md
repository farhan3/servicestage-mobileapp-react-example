## Step 2:  Setup Android Studio, Node JS and Git

### Enable Virtualization in BIOS

Android Studio emulator requires hardware acceleration.  It is done by enabling virtualization from the machine’s BIOS.  
1.	Find out how to get into BIOS menu of your laptop or desktop.  It usually involve rebooting machine and pressing some function key(s).  
2.	Once logged into the BIOS menu, look for “Virtualization Support” items.  Enable them.

***

### Setup Android Studio

Android Studio is an IDE for mobile application development.  It comes with mobile phone emulators for development and testing purpose.  We will use Android Studio as development tool in this tutorial.  

The following instruction is for installing Android Studio on Windows 10.  If you are running a different operating system or need more information.  Please visit [https://developer.android.com/studio/install](https://developer.android.com/studio/install)  

1.	Download latest Android Studio installer from the following link.  (https://developer.android.com/studio/).  For example: android-studio-ide-181.5056338-windows.exe  
![s2a](./imgs/s2a.png)

2.	Double click the downloaded exe file to start installer.  Click **Next**.  
![s2b](./imgs/s2b.png)

3.	Keep the default list of components to install.  Click **Next**.  
![s2c](./imgs/s2c.png)

4.	Installation location.  You may keep the default or specify a different one.  Click **Next**.  
![s2d](./imgs/s2d.png)

5.	Click **Install** to start install.  Once it is completed, click **Next**.  
![s2e](./imgs/s2e.png)

6.	Click **Finish** to complete the installation.  
![s2f](./imgs/s2f.png)

7.	When starting Android Studio the first time, if the laptop or desktop is behind proxy, it may ask for setup proxy information.  Enter proxy information.  
![s2g](./imgs/s2g.jpg)  
![s2h](./imgs/s2h.png)  

8.	If Android SDK is not installed, it will ask for installing Android SDK.  Follow the installer instruction to install Android SDK.  Use the provided default values.  
![s2i](./imgs/s2i.jpg)  

9.	This is the screen when you start Android Studio the first time.  
![s2j](./imgs/s2j.png)  

10.	We will need to update the IDE to latest update.  Click **Configure -> Check for Updates** at the lower right corner to start update.  
![s2k](./imgs/s2k.png)  

11.	The following screen shows up once the update is completed.  
![s2l](./imgs/s2l.png)  

For more information, please refer to the following reference,  

[https://developer.android.com/studio/run/emulator-acceleration](https://developer.android.com/studio/run/emulator-acceleration)  
[https://developer.android.com/studio/run/emulator](https://developer.android.com/studio/run/emulator)  

***

### Install Android Studio Components

This tutorial uses **Android SDK Platform 25, 26, 27** and **Google APIs Intel x86 Atom_64 System Image**.  Follow the instructions below to install them.  If any component is missing, the build tool will indicate them and ask to install them as well.  

1.	Click **Configure -> SDK Manager**.

2.	In the SDK Platforms tab, check the Show Package Detail checkbox.  
![s2m](./imgs/s2m.png)  

3.	Check the checkbox indicated in the image,  
![s2n](./imgs/s2n.png)  

4.	Click **Apply** and follow the instructions to start install.  Once completed, it shows the following screen.  
![s2o](./imgs/s2o.png)  

***

### (Optional) Setup Node JS

Node JS is a SDK / Programming Language used in this tutorial.   The version of Node JS used in this tutorial is v10.13.0.  Follow the step below to install Node JS.  

1.	Download the Node JS installer from this URL.  [https://nodejs.org/en/download/](https://nodejs.org/en/download/).  This tutorial is written with Windows 10 and uses the 64-bits Windows Installer (.msi)  

2.	After download is completed, double click the downloaded .msi file to start the installer.  
![s2p](./imgs/s2p.png)  

3.	Follow the instruction to install Node JS.    

4.	After installation is completed, verify the installation by open a command prompt.  Run ‘node –v’ and ‘npm –v’ to verify installation and version.  
![s2q](./imgs/s2q.png)  

5.	(Optional)  Proxy setup.  Depends on the location of the laptop / desktop, proxy setting is needed.  Run the following command to configure proxy.  Change the proxy host and port to your company proxy accordingly.  

```
   npm config set proxy http://proxy.mycompany.com:8080
   npm config set https-proxy http://proxy.mycompany.com:8080
```

Or use the below commands if id and password are required from proxy  

```
   npm config set proxy http://<user>:<password>@proxy.mycompany.com:8080
   npm config set https-proxy http:// <user>:<password>@proxy.mycompany.com:8080
```

***

### (Optional) Setup Git

Git is a source code management tool used in this tutorial.  Follow the step below to install Git client.  

1.	Download the Git client installer from this URL.  [https://git-scm.com/downloads](https://git-scm.com/downloads).  This tutorial is written with Windows 10 and uses the 64-bits Windows Installer.  

2.	After download is completed, double click the downloaded .exe file to start the installer.  
![s2r](./imgs/s2r.png) 

3.	Follow the instruction to install Git client.   This screen shows up when installation is completed.  
![s2s](./imgs/s2s.png)  

4.	(Optional)  Proxy setup.  Depends on the location of the laptop / desktop, proxy setting is needed.  Run the following command to configure proxy.  Change the proxy host and port to your company proxy accordingly.  

```
   git config --global http.http://github.com.proxy http://<user>:<password>@proxy.mycompany.com:8080
   git config --global http.http://github.com.sslverify false
   git config --global http.https://github.com.proxy http://<user>:<password>@proxy.mycompany.com:8080
   git config --global http.https://github.com.sslverify false
```


