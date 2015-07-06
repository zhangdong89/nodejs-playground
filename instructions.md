Get started with ksmith
-----------------------------------

Welcome to Node JS Web Starter application that uses the IBM DataCache REST interface!

This sample application demonstrates how to write a Node JS application using IBM DataCache REST interface and deploy it on BlueMix.

1. [Install the cf command-line tool](https://www.ng.bluemix.net/docs/BuildingWeb.jsp#install-cf).
2. [Download the starter application package](https://ace.ng.bluemix.net:443/rest/../rest/apps/ad9013bf-86fb-4b39-9e41-ad4acfb457b1/starter-download)
3. Extract the package and cd to it.
4. Connect to BlueMix:

		cf api https://api.ng.bluemix.net

5. Log into BlueMix:

		cf login -u knksmith57@gmail.com
		cf target -o knksmith57@gmail.com -s dev
		
6. Deploy your app:

		cf push ksmith

7. Access your app: [http://ksmith.ng.bluemix.net](http://ksmith.ng.bluemix.net)
