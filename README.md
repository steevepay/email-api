# Email Dispatcher API (ﾉ◕ヮ◕)ﾉ*・ﾟ✧ ✉️

> Small server to send an emails or pre-defined emails  📭
## API Usage

**Send an email**


`POST https://{domain.com}/send`

```json
{
  "from": "",
  "to": "",
  "cc": "",
  "subject": "",
  "text": "",
  "html": "",
}
```

It returns a status code **200** if the domain origin is whitelisted, or the the access key is provided in the **Authorization** header, otherwise it returns **401**.

## API Setup

> Node is required and SMTP credentials

1. Create an `.env` file with the following configuration. 
```dotenv
# SERVER
DOMAIN="{domain.com}"
PORT=3000
# SECURITY WHITELIST (OPTIONAL): multiple domains are accepted if it is seperated with a coma, such as `domain1.org,domain2.org`
WHITELIST="domain.org"
# SECURITY ACCESS KEY (OPTIONAL)
AUTHORIZATION_KEY=""
# SMTP CONFIG
SMTP_HOST=""
SMTP_PORT=""
SMTP_FROM=""
SMTP_PASS=""
```
2. Install NPM packages
```sh
npm install
```
3. To start the server 
```sh
# With NPM Command Line:
npm run start
# With Docker Compose:
docker-compose up
```
4. Now you can request the following URLs:
  - **GET https://{domain.com}/**: it returns a status code **200** if the domain origin is whitelisted, or the the access key is provided in the **Authorization** header, otherwise it returns **401**.
  - **GET https://{domain.com}/readme**: it returns the readme as HTML page. This page is public and not protected.
  - **POST https://{domain.com}/send**: it send an email, if the domain origin is whitelisted, or the the access key is provided in the **Authorization** header, otherwise it returns **401**.
