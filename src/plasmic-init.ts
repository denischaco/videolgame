import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5GAkXaJ2X7qEVGyLW6URkW",  // ID of a project you are using
      token: "dkgdirDNKQeeSvIzZqXgPcNIUBxVXUZCSrQuzj7o8oD5WWOA5bxCbjsLemPlnlY7cd8shQ2QKkpd88hA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

