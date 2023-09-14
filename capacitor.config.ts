import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "fr.pruvostbastien.firstionicapp",
  appName: "First Ionic App",
  webDir: "dist",
  server: {
    androidScheme: "https"
  }
};

export default config;
