import { Profile } from '../types/Profile';

const profiles = [
  { name: 'Akseli', age: 20, keywords: ['sosiaali- ja  terveysala', 'sote'] },
  { name: 'Rikhard', age: 30, keywords: ['kielitiede', 'tutkimusmenetelmät', 'tutkijakoulutusasteen'] },
  { name: 'Mirka', age: 40, keywords: ['luomu', 'luomutuotanto'] },
  { name: 'Janika', age: 30, keywords: ['pedagogiikka', 'digipedagogiikka', 'opettaja', 'aineenopettaja'] },
  { name: 'Roosa', age: 45, keywords: ['kiertotalous', 'kestävä kehitys'] },
] as ReadonlyArray<Profile>;

export default profiles;
