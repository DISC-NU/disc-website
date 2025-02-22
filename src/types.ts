export interface Logo {
  type: "image";
  src: string;
}

export interface Company {
  name: string;
  logo: Logo;
  website: string;
}

export interface Client {
  name: string;
  logo: Logo;
  website: string;
}
