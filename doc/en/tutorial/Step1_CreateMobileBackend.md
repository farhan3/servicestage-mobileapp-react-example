## Step 1:  Create Mobile Backend in Huawei Public Cloud

Follow the steps below to create a Mobile Backend service in the Huawei Public Cloud,

1.  Open a browser and go to ServiceStage.  Login using Huawei account if needed. [https://console.huaweicloud.com/servicestage/?region=cn-north-1#/apps/webapp/new/create?template=mbaas](https://console.huaweicloud.com/servicestage/?region=cn-north-1#/apps/webapp/new/create?template=mbaas)

2.  Fill in a unique **Application Name**, an **Application Id** and a **Master Key**.  Remember the Application Id and Master Key as they will act as credentials to access your application later on, they can only contain alphanumeric characters with underscores and dashes. Check the checkbox to confirm if your application meet the legal requirement, Click **Next**.
![s1a](./imgs/s1a.png)

3.	Select your **CCE cluster** and **Load Balancer** for deployment.  
![s1b](./imgs/s1b.png)

4.	Create or select an existing **PostgreSQL 9.5** Service.  
![s1c](./imgs/s1c.png)

5.	Select a valid **Security Group** of the CCE cluster if asked  
![s1d](./imgs/s1d.png)

6.	Click **Next** and click **Submit** in the next page to start creation of the Mobile Backend service.  
