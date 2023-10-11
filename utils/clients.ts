export interface Client {
  name: string;
  imageUrl: string;
  webUrl: string;
}

export const myClients: Client[] = [
  {
    name: "Warner Bros. Discovery",
    imageUrl: "/clients/warner.png",
    webUrl: "https://wbd.com/",
  },
  {
    name: "Indeed",
    imageUrl: "/clients/indeed.png",
    webUrl: "https://indeed.com",
  },
  {
    name: "Deloitte",
    imageUrl: "/clients/deloitte.png",
    webUrl: "https://deloitte.com",
  }
];
