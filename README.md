# Email Dispatcher API (ﾉ◕ヮ◕)ﾉ*・ﾟ✧ ✉️

> Small server to send an emails or pre-defined emails  📭
## API

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