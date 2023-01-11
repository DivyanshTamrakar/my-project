export type address = {
  id: number;
  icon: string;
  phone: string;
  address: string;
  company: string;
};
export type hireDevelopers = {
  name: string[];
  heading: string;
};
export type copyright = {
  name: string;
  policy: string;
};
export type engagement = { heading: string; enagagement: string[] };

export type socialConnect = { heading: string; socialIcons: { src: string }[] };

export type AppProps = {
  engagement: engagement;
  id: number;
  awards: string[];
  addresses: address[];
  hireDevelopersComponent: hireDevelopers;
  quicklinks: hireDevelopers;
  company: hireDevelopers;
  subheading: string;
  copyright: copyright;
  image: { url: string };
  certificate: { src: string }[];
  socialConnect: socialConnect;
};
