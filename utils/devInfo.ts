interface DevInfo {
  name: string;
  github: string;
  linkedIn: string;
}

export const devInfo: DevInfo = {
  name: "Joaquin Diaz",
  github: "joacod",
  linkedIn: "diazjoaquin",
};

export const githubUrl = "https://github.com/" + devInfo.github;
export const linkedinUrl = "https://www.linkedin.com/in/" + devInfo.linkedIn;
