export interface Client {
  name: string;
  imageUrl: string;
  webUrl: string;
  descriptionKey: string;
}

export const myClients: Client[] = [
  {
    name: "Pluto TV",
    imageUrl: "/clients/plutotv.png",
    webUrl: "https://pluto.tv/",
    descriptionKey: "clientDescription4",
  },
  {
    name: "Warner Bros. Discovery",
    imageUrl: "/clients/warner.png",
    webUrl: "https://wbd.com/",
    descriptionKey: "clientDescription1",
  },
  {
    name: "Indeed",
    imageUrl: "/clients/indeed.png",
    webUrl: "https://indeed.com",
    descriptionKey: "clientDescription2",
  },
  {
    name: "Deloitte",
    imageUrl: "/clients/deloitte.png",
    webUrl: "https://deloitte.com",
    descriptionKey: "clientDescription3",
  },
];
