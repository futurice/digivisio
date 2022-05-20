import { Profile } from '../types/Profile';

const profiles = [
  {
    name: 'Akseli',
    age: 20,
    keywords: ['sosiaali- ja  terveysala', 'sote'],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha3NlbGkiLCJuYW1lIjoiQWtzZWxpIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.6TKQnmiIs2JdmZcgW-steaTTmIlh2aPycYGTK1z3pNY',
  },
  {
    name: 'Rikhard',
    age: 30,
    keywords: ['kielitiede', 'tutkimusmenetelmät', 'tutkijakoulutusasteen'],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyaWtoYXJkIiwibmFtZSI6IlJpa2hhcmQiLCJpYXQiOjE2NTMwMjgzMDgsImV4cCI6MTg1MzAzMTkwOCwiYXVkIjoiZGlnaXZpc2lvIiwiaXNzIjoiZGlnaXZpc2lvYXBwIn0.V5HL_Ky4OcZHe4F0gYhfhvKuccDKkB2IEWjAZoY3-s0',
  },
  {
    name: 'Mirka',
    age: 40,
    keywords: ['luomu', 'luomutuotanto'],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaXJrYSIsIm5hbWUiOiJNaXJrYSIsImlhdCI6MTY1MzAyODMwOCwiZXhwIjoxODUzMDMxOTA4LCJhdWQiOiJkaWdpdmlzaW8iLCJpc3MiOiJkaWdpdmlzaW9hcHAifQ.aF0JhUxok_UQiKDbYoNm0R0y3E_H4AXlyk-RGdzB9XI',
  },
  {
    name: 'Janika',
    age: 30,
    keywords: ['pedagogiikka', 'digipedagogiikka', 'opettaja', 'aineenopettaja'],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5pa2EiLCJuYW1lIjoiSmFuaWthIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.l2uYr99fOHWKrhAtwNQmEAsdm8LrE9el4rZc20sg-DM',
  },
  {
    name: 'Roosa',
    age: 45,
    keywords: ['kiertotalous', 'kestävä kehitys'],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb29zYSIsIm5hbWUiOiJyb29zYSIsImlhdCI6MTY1MzAyODMwOCwiZXhwIjoxODUzMDMxOTA4LCJhdWQiOiJkaWdpdmlzaW8iLCJpc3MiOiJkaWdpdmlzaW9hcHAifQ.d0waCtruX6oWr-4hMQWWlx1gB84vnvBwwJMSOXsv48Y',
  },
] as ReadonlyArray<Profile>;

export default profiles;
