import GitHubImport from "next-auth/providers/github";
import GoogleImport from "next-auth/providers/google";
import DiscordImport from "next-auth/providers/discord";

const GitHubProvider = GitHubImport.default ?? GitHubImport;
const GoogleProvider = GoogleImport.default ?? GoogleImport;
const DiscordProvider = DiscordImport.default ?? DiscordImport;
export const authOption = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },
};
