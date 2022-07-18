# Zuri-Mails

 Send automated emails from your NodeJs app.
 It is configured to send mails from a Google mail account 
 
For the program to run properly, enable 2-Step Verification and generate Application password, then you can use the generated password to send emails using nodemailer. To do so you need to do the following:

1. Sign in to google account
2. Go to Security
3. In "Signing in to Google" section choose 2-Step Verification and verify yourself
4. Back to Security in "Signing in to Google" section choose App passwords
5. From the Select app drop down choose Other (Custom name) and put a name e.g. nodemailer
6. A modal dialog will appear with the password. 
7. Paste the email address and password appropriately in the .env file
<img width="1280" alt="Screenshot 2022-07-18 at 18 19 38" src="https://user-images.githubusercontent.com/63821349/179567417-320cbd9e-a472-41b7-b0f2-3048aad5a8c1.png">
<img width="1280" alt="Screenshot 2022-07-18 at 18 20 07" src="https://user-images.githubusercontent.com/63821349/179567459-0d0fe4ca-8193-4ff4-8a98-bcc55fe4151b.png">
