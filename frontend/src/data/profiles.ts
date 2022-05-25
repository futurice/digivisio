/* eslint-disable max-lines */
import { Profile } from '../types/Profile';

const profiles = [
  {
    name: 'Akseli',
    age: 20,
    interest: 'Sosiaali- ja  terveysala',
    thumbnail: '/Akseli.png',
    enrolledInUniOrGraduated: false,
    educationalLevels: [
      {
        key: 'e5a48ada-3de0-4246-9b8f-32d4ff68e22f',
        value: 'korkeakoulutus',
      },
      {
        key: 'ff3334db-2a71-4459-8f0d-c42ce2b12a70',
        value: 'alemman korkeakouluasteen tutkinto',
      },
    ],
    educationalRoles: [
      {
        key: '582949cb-36a4-4053-9f2f-c53ae954a6ae',
        value: 'Oppija',
      },
    ],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha3NlbGkiLCJuYW1lIjoiQWtzZWxpIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.6TKQnmiIs2JdmZcgW-steaTTmIlh2aPycYGTK1z3pNY',
  },
  {
    name: 'Rikhard',
    age: 30,
    interest: 'Kielitiede',
    thumbnail: '/Rikhard.png',
    enrolledInUniOrGraduated: true,
    educationalLevels: [
      {
        key: 'e5a48ada-3de0-4246-9b8f-32d4ff68e22f',
        value: 'korkeakoulutus',
      },
      {
        key: '7c722ac4-f06c-4f2a-a41f-b0c5aa10070a',
        value: 'tutkijakoulutusasteen tutkinto',
      },
    ],
    educationalRoles: [
      {
        key: '582949cb-36a4-4053-9f2f-c53ae954a6ae',
        value: 'Oppija',
      },
    ],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyaWtoYXJkIiwibmFtZSI6IlJpa2hhcmQiLCJpYXQiOjE2NTMwMjgzMDgsImV4cCI6MTg1MzAzMTkwOCwiYXVkIjoiZGlnaXZpc2lvIiwiaXNzIjoiZGlnaXZpc2lvYXBwIn0.V5HL_Ky4OcZHe4F0gYhfhvKuccDKkB2IEWjAZoY3-s0',
  },
  {
    name: 'Mirka',
    age: 40,
    interest: 'Luomuviljely',
    thumbnail: '/Mirka.png',
    enrolledInUniOrGraduated: true,
    educationalLevels: [
      {
        key: 'e5a48ada-3de0-4246-9b8f-32d4ff68e22f',
        value: 'korkeakoulutus',
      },
      {
        key: 'bc25d0e7-3c68-49a1-9329-239dae01fab7',
        value: 'omaehtoinen osaamisen kehittäminen',
      },
    ],
    educationalRoles: [
      {
        key: '582949cb-36a4-4053-9f2f-c53ae954a6ae',
        value: 'Oppija',
      },
    ],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaXJrYSIsIm5hbWUiOiJNaXJrYSIsImlhdCI6MTY1MzAyODMwOCwiZXhwIjoxODUzMDMxOTA4LCJhdWQiOiJkaWdpdmlzaW8iLCJpc3MiOiJkaWdpdmlzaW9hcHAifQ.aF0JhUxok_UQiKDbYoNm0R0y3E_H4AXlyk-RGdzB9XI',
  },
  {
    name: 'Janika',
    age: 30,
    interest: 'Pedagogiikka',
    thumbnail: '/Janika.png',
    enrolledInUniOrGraduated: true,
    educationalLevels: [
      {
        key: 'e5a48ada-3de0-4246-9b8f-32d4ff68e22f',
        value: 'korkeakoulutus',
      },
      {
        key: '9c14f097-68e3-4e6b-a772-71a44442f72f',
        value: 'ylemmän korkeakouluasteen tutkinto',
      },
    ],
    educationalRoles: [
      {
        key: '582949cb-36a4-4053-9f2f-c53ae954a6ae',
        value: 'Oppija',
      },
      {
        key: '84dfd485-15bb-4688-bf5f-3bd1cbff31ec',
        value: 'Opetuksen ja kasvatuksen johtaja',
      },
      {
        key: '9f3904bf-a09d-4dfd-bf46-15ae225b8941',
        value: 'Opettaja',
      },
    ],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5pa2EiLCJuYW1lIjoiSmFuaWthIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.l2uYr99fOHWKrhAtwNQmEAsdm8LrE9el4rZc20sg-DM',
  },
  {
    name: 'Roosa',
    age: 45,
    interest: 'Kestävä kehitys',
    thumbnail: '/Roosa.png',
    enrolledInUniOrGraduated: true,
    educationalLevels: [
      {
        key: 'e5a48ada-3de0-4246-9b8f-32d4ff68e22f',
        value: 'korkeakoulutus',
      },
    ],
    educationalRoles: [
      {
        key: '582949cb-36a4-4053-9f2f-c53ae954a6ae',
        value: 'Oppija',
      },
    ],
    fakejwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb29zYSIsIm5hbWUiOiJyb29zYSIsImlhdCI6MTY1MzAyODMwOCwiZXhwIjoxODUzMDMxOTA4LCJhdWQiOiJkaWdpdmlzaW8iLCJpc3MiOiJkaWdpdmlzaW9hcHAifQ.d0waCtruX6oWr-4hMQWWlx1gB84vnvBwwJMSOXsv48Y',
  },
] as ReadonlyArray<Profile>;

export default profiles;
