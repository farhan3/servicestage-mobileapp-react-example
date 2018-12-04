## Step 6:  Connect Mobile App to Huawei Mobile Backend

You have the Mobile Application described in this tutorial.  It is time to connect to Huawei Mobile Backend in Public Cloud.  

1.	Find out the Application URL of the Mobile Backend created in Step 1 from in Service Stage Console [https://console.huaweicloud.com/servicestage/?region=cn-north-1#/apps/list](https://console.huaweicloud.com/servicestage/?region=cn-north-1#/apps/list). **The url will contain the name you picked during provisioning**, for example, http://johnsmbaas.cn-north-1.proapp.today.  

2.	In an editor, open the file **<path to>/servicestage-mobileapp-react-example/app/data/PareUtil.js**  
![s6a](./imgs/s6a.png)  

3.	Locate the **init()** method.  

4.	Replace myAppID and masterKey with your Mobile Backend’s **appID** and **masterKey** specified in Step 1.   

5.	Replace the host name of your Mobile Backend.  
![s6b](./imgs/s6b.png)  

6.	Save the file.  

  
