export interface Project {
  name: string;
  slug: string;
  desc: string;
  url: string;
  readme: string;
}

export const projects: Project[] = [
  {
    name: "SMD Tower",
    slug: "smd-tower",
    desc: "Tape and Reel Cabinet",
    url: "https://smttower.sdp.com",
    readme: "/projects/smd-tower/smd-tower.md",
  },
  {
    name: "IoT Engineering Dashboard",
    slug: "iot-dashboard",
    desc: "Master Dashboard",
    url: "https://iotdashboard.sdp.com",
    readme: "/projects/iot-dashboard/iot-dashboard.md",
  },
];
