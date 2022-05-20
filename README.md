# digivisio



## Authentication

The backend requires a "fake" jwt created for this project. Normally this JWT would be signed by some external provider, or handled with an asymmetric key, but for the purpose of the project a dummy symmetric key and JWTs are used


The fake JWTs contain the following claims:
```
{
  "sub": "<name>",
  "name": "<name>",
  "iat": 1653028308,
  "exp": 1853031908,
  "aud": "digivisio",
  "iss": "digivisioapp"
}
```

The following JWTs have been generated and signed:   

| User | sub | JWT |
|------|-----|-----|
| Akseli | akseli  |   eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha3NlbGkiLCJuYW1lIjoiQWtzZWxpIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.6TKQnmiIs2JdmZcgW-steaTTmIlh2aPycYGTK1z3pNY   |
| Rikhard | rikhard  |  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyaWtoYXJkIiwibmFtZSI6IlJpa2hhcmQiLCJpYXQiOjE2NTMwMjgzMDgsImV4cCI6MTg1MzAzMTkwOCwiYXVkIjoiZGlnaXZpc2lvIiwiaXNzIjoiZGlnaXZpc2lvYXBwIn0.V5HL_Ky4OcZHe4F0gYhfhvKuccDKkB2IEWjAZoY3-s0   |
| Mirka | mirka  | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaXJrYSIsIm5hbWUiOiJNaXJrYSIsImlhdCI6MTY1MzAyODMwOCwiZXhwIjoxODUzMDMxOTA4LCJhdWQiOiJkaWdpdmlzaW8iLCJpc3MiOiJkaWdpdmlzaW9hcHAifQ.aF0JhUxok_UQiKDbYoNm0R0y3E_H4AXlyk-RGdzB9XI  |
| Janika | janika  | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5pa2EiLCJuYW1lIjoiSmFuaWthIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.l2uYr99fOHWKrhAtwNQmEAsdm8LrE9el4rZc20sg-DM     |
| Roosa | roosa  |   eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb29zYSIsIm5hbWUiOiJyb29zYSIsImlhdCI6MTY1MzAyODMwOCwiZXhwIjoxODUzMDMxOTA4LCJhdWQiOiJkaWdpdmlzaW8iLCJpc3MiOiJkaWdpdmlzaW9hcHAifQ.d0waCtruX6oWr-4hMQWWlx1gB84vnvBwwJMSOXsv48Y    |

HS256 Signing key: `NTNv7j0TuYARvmNMmWXo6fKvM4o6nv/aUi9ryX38ZH+L1bkrnD1ObOQ8JAUmHCBq7Iy7otZcyAagBLHVKvvYaIpmMuxmARQ97jUVG16Jkpkp1wXOPsrF9zwew6TpczyHkHgX5EuLg2MeBuiT/qJACs1J0apruOOJCg/gOtkjB4c=`