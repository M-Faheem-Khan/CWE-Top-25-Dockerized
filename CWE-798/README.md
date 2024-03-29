# CWE-798: Use of Hard-coded Credentials  

### Summary
Hard-coded credentials found in code often left by developers for ease of use can be deterimental to the security of any applicaiton or company. Many times these credentials are granted `Administrator` or `Developer` permissions. 

### Example Walkthrough
- Build and run the application
    - `docker build . --tag cwe-798`
    - `docker run -it -p 8080:8080 cwe-798`
- go to [localhost:8080/](localhost:8080/)
    - You should see a login page
- view the page source
    - You should see the credentials hard coded in the HTML comments. Try the credential combination.

### Exercise
- Make modifications to the code to mitigate the vulnerability.

### Mitigation
- Remove developer comments during build.
- Add step in your pipeline to detect hard-coded credentials(e.g. gitleaks)
- Store credentials in environment variables which are "secured"(only read by the service running and can only be changed and not read by any given user).
- Store credentials in Password Vaults and read during runtime(Hashicorp Vault, AWS SSM Parameter Store)
- Use Roles instead of credentials if possible 

### Further Reading
- [Use of Hard-Coded Password by OWASP](https://owasp.org/www-community/vulnerabilities/Use_of_hard-coded_password)
- [why it's urgent to deal with your hardcoded secrets by GitGuardian](https://blog.gitguardian.com/why-its-urgent-to-deal-with-your-hard-coded-credentials/)
<!-- EOF -->