import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = ` 
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="28" rx="14" fill="#F4F6F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.43442 9.43442C9.58445 9.28444 9.78789 9.20019 10 9.20019C10.2122 9.20019 10.4156 9.28444 10.5656 9.43442L14 12.8688L17.4344 9.43442C17.5082 9.35801 17.5965 9.29706 17.6941 9.25514C17.7917 9.21321 17.8967 9.19114 18.0029 9.19022C18.1091 9.18929 18.2145 9.20953 18.3128 9.24976C18.4111 9.28998 18.5004 9.34939 18.5755 9.4245C18.6507 9.49961 18.7101 9.58894 18.7503 9.68725C18.7905 9.78557 18.8107 9.89091 18.8098 9.99714C18.8089 10.1034 18.7868 10.2083 18.7449 10.3059C18.703 10.4035 18.642 10.4918 18.5656 10.5656L15.1312 14L18.5656 17.4344C18.7114 17.5853 18.792 17.7874 18.7902 17.9971C18.7883 18.2069 18.7042 18.4075 18.5559 18.5559C18.4076 18.7042 18.2069 18.7883 17.9971 18.7902C17.7874 18.792 17.5853 18.7113 17.4344 18.5656L14 15.1312L10.5656 18.5656C10.4147 18.7113 10.2127 18.792 10.0029 18.7902C9.79315 18.7883 9.5925 18.7042 9.44417 18.5559C9.29584 18.4075 9.21171 18.2069 9.20989 17.9971C9.20806 17.7874 9.2887 17.5853 9.43442 17.4344L12.8688 14L9.43442 10.5656C9.28445 10.4156 9.2002 10.2121 9.2002 10C9.2002 9.78788 9.28445 9.58444 9.43442 9.43442Z" fill="#676F7A"/>
</svg>
`;

export default () => <SvgXml xml={xml} />;