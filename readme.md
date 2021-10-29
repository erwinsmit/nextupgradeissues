Demonstrates the redirect issues with Azure Functions after updating from version Next.js 10 to 12. 

How to replicate:
1. Npm install in nextv10 & nextv12 folders & root directory
2. Npm run build in nextv10 & nextv12 folders
3. Npm start in root directory to start the Azure Functions

http://localhost:7071/api/nextserver10 is working fine while http://localhost:7071/api/nextserver12 is redirecting to http://localhost:7071/localhost:7071/api/nextserver12