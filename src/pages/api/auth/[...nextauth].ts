import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiHandler } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

interface userProviders {
  name: string;
  email: string;
  image: string;
}

interface accountProvider {
  provider: string;
  type: string;
  id: string;
  refreshToken?: string;
  accessToken: string;
  accessTokenExpires?: string;
}

export interface UserCredentialsDB {
  email: string;
  name?: string;
  password?: string;
  role: string;
  provider: string;
  image?: string;
}

const options: InitOptions = {
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ''
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    }),
    Providers.Twitter({
      clientId: process.env.TWITCH_CLIENT_ID || '',
      clientSecret: process.env.TWITCH_CLIENT_SECRET || ''
    }),
    Providers.Credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {},
      authorize: async credentials => {
        // console.log('authorize: async credentials');
        // console.log(credentials);
        // console.log(JSON.stringify(credentials, null, 4));
        const prisma = new PrismaClient();

        let getUser = await prisma.user.findUnique({
          where: {
            email: credentials.userEmail
          },
          select: {
            email: true,
            name: true,
            password: true,
            role: true,
            provider: true,
            image: true
          }
        });
        // console.log('prisma getUser');
        // console.log(getUser);

        if (credentials.isNewUser === 'true') {
          if (getUser) {
            console.log('===> authorize END return Promise.reject(login)');
            return Promise.reject('/login');
          }

          prisma.$use(async (params, next) => {
            if (params.model === 'User' && params.action === 'create') {
              params.args.data.password = await bcrypt.hash(
                `${params.args.data.password.trim()}-${params.args.data.email.trim()}`,
                10
              );
            }
            return next(params);
          });
          console.log(`data prima create`);
          console.log(`data prima create`);

          const data = await prisma.user.create({
            data: {
              email: credentials.userEmail,
              name: credentials.userName,
              password: credentials.password,
              role: 'Visitor',
              provider: 'credentials',
              image: null
            }
          });
          console.log('prisma data');
          console.log(data);
          console.log('===> authorize END return Promise.resolve(data);');
          return Promise.resolve(data);
        } else {
          if (!getUser) {
            console.log(
              '===> authorize END return Promise.reject(login) !getUser'
            );
            return Promise.reject('/login');
          }

          credentials.password;

          const compare = await bcrypt.compare(
            `${credentials.password.trim()}-${credentials.userEmail.trim()}`,
            String(getUser.password)
          );
          console.log(
            `===> authorize credentials.email ${credentials.userEmail} credentials.password ${credentials.password} getUser.password ${getUser.password}`
          );
          console.log(`===> authorize END Compare ${compare}`);

          if (!compare) {
            console.log('===> authorize END user or and password error');
            return Promise.reject('/login');
          } else {
            console.log('===> authorize END return Promise.resolve(data);');
            return Promise.resolve(getUser);
          }
        }
      }
    })
  ],

  // database: '',

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    jwt: true,
    maxAge: 1 * 3 * 60 * 60 // 3 hours
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: false
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {}
  },

  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signin',
    // error: '/error' // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/signin' // If set, new users will be directed here on first sign in
  },

  callbacks: {
    signIn: async (
      user: userProviders,
      account: accountProvider,
      profile: Object
    ) => {
      /**
       * @param  {object} user  User profile (e.g. user id, name, email)
       * {
       *  name: 'Miguel Duque Filho',
       *  email: 'miguel.duque@globo.com',
       *  image: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84'
       * }
       * @param  {object} account  Account used to sign in (e.g. OAuth account)
       *    {
       *   provider: 'facebook',
       *   type: 'oauth',
       *   id: '10218237314981287',
       *  refreshToken: undefined,
       *  accessToken: 'EAAMB0ZAA3ZCZCoBACLZAsDhoFXV9Y7RepFgKFrxnb8HFdvs8nPoxX1ZBSfITXP7uSYYgGj1RO81ZBPYSQrLTzlrkZBkxG6mFRYt7FYaS9PYkLlXQHPU3q025aXDfvBcoZBbTMJjC9I1yd3xcWeadmPG8fs15eIa9nL0ZD',
       *  accessTokenExpires: null
       * }
       * @param  {object} profile Provider specific metadata (e.g. OAuth Profile)
       *    {
       *   email: 'miguel.duque@globo.com',
       *   name: 'Miguel Duque Filho',
       *   picture: {
       *     data: {
       *       height: 50,
       *       is_silhouette: false,
       *       url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84',
       *       width: 50
       *     }
       *   },
       *   id: '10218237314981287'
       * }
       * @return {boolean|object}  Return `true` (or a modified JWT) to allow sign in
       *                           Return `false` to deny access
       */
      console.log(
        '==> callbacks - signIn: async (user: Object, account: Object, profile: Object)'
      );

      console.log('===>>> user');
      console.log(user);
      console.log('===>>> account');
      console.log(account);
      console.log('===>>> profile');
      console.log(profile);

      if (account.type !== 'credentials') {
        const prisma = new PrismaClient();

        const data = await prisma.user.upsert({
          where: {
            email: user.email
          },
          update: {
            name: user.email,
            image: user.image
          },
          create: {
            email: user.email,
            name: user.email,
            image: user.image,
            role: 'Visitor',
            provider: account.type
          }
        });
        console.log('prisma data');
        console.log(data);
        console.log('===> authorize END return Promise.resolve(data);');
      }
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        console.log('<== callbacks signIn:  Promise.resolve(true)');
        return Promise.resolve(true);
      } else {
        console.log('<== callbacks signIn:  Promise.resolve(false)');
        return Promise.resolve(false);
      }
    },

    redirect: async (url: string, baseUrl: string) => {
      /**
       * @param  {string} url      URL provided as callback URL by the client
       * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
       * @return {string}          URL the client will be redirect to
       */
      // console.log(`<==> redirect: async (url=${url}, baseUrl=${baseUrl})`);

      return url.startsWith(baseUrl)
        ? Promise.resolve(baseUrl)
        : Promise.resolve(baseUrl);
    },

    session: async (session: Object, user: Object) => {
      /**
       * @param  {object} session  Session object
       * @param  {object} user     User profile (e.g. user id, name, email)
       * @return {object}          Session that will be returned to the client
       */
      // console.log('==> Callbacks session: async (session, user)');
      // console.log('===>>> session');
      // console.log(session);
      // console.log('===>>> user');
      // console.log(user);
      // console.log('<== Callbacks session : return Promise.resolve(session)');
      return Promise.resolve(session);
    },

    jwt: async (
      token: any,
      user: Object,
      account: Object,
      profile: Object,
      isNewUser: Boolean = false
    ) => {
      /**
       * @param  {object} token    Decrypted JSON Web Token
       * {
       *   name: 'Miguel Duque Filho',
       *   email: 'miguel.duque@globo.com',
       *   picture: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84'
       * }
       * @param  {object} user     Profile - only available on sign in
       * {
       *  name: 'Miguel Duque Filho',
       *  email: 'miguel.duque@globo.com',
       *  image: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84'
       * }
       * @param  {object} account  Account used to sign in (e.g. OAuth account)
       * {
       *   provider: 'facebook',
       *   type: 'oauth',
       *   id: '10218237314981287',
       *   refreshToken: undefined,
       *   accessToken: 'EAAMB0ZAA3ZCZCoBACLZAsDhoFXV9Y7RepFgKFrxnb8HFdvs8nPoxX1ZBSfITXP7uSYYgGj1RO81ZBPYSQrLTzlrkZBkxG6mFRYt7FYaS9PYkLlXQHPU3q025aXDfvBcoZBbTMJjC9I1yd3xcWeadmPG8fs15eIa9nL0ZD',
       *   accessTokenExpires: null
       * }
       * @param  {object} profile  Provider specific metadata (e.g. OAuth Profile)
       * {
       *  email: 'miguel.duque@globo.com',
       *  name: 'Miguel Duque Filho',
       *  picture: {
       *    data: {
       *      height: 50,
       *      is_silhouette: false,
       *      url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10218237314981287&height=50&width=50&ext=1612181976&hash=AeSniyrvFaDZClIqx84',
       *       width: 50
       *     }
       *   },
       *  id: '10218237314981287'
       * }
       * @param  {boolean} isNewUser True if new user (only available on sign in)
       * @return {object}          JSON Web Token that will be saved
       */
      // console.log('==> jwt: async (token, user, account, profile, isNewUser)');
      // console.log('===>>> token');
      // console.log(token);
      // console.log('===>>> user');
      // console.log(user);
      // console.log('===>>> account');
      // console.log(account);
      // console.log('===>>> profile');
      // console.log(profile);
      // console.log('===>>> isNewUser');
      // console.log(isNewUser);

      const isSignIn = user ? true : false;
      // Add auth_time to token on signin in
      if (isSignIn) {
        token.auth_time = Math.floor(Date.now() / 1000);
        // console.log('===>>> token after update');
        // console.log(token);
      }
      // console.log('<== jwt: return Promise.resolve(token)');
      return Promise.resolve(token);
    }

    // events: {
    /* on successful sign in */
    // signIn: async message => {
    //   console.log(`<==> Events Signin ${message}`);
    // },
    /* on signout */
    // signOut: async message => {
    //   console.log(`<==> Events signOut ${message}`);
    // },
    /* user created */
    // createUser: async message => {
    //   console.log(`<==> Events createUser ${message}`);
    // },
    /* account linked to a user */
    // linkAccount: async message => {
    //   console.log(`<==> Events linkAccount ${message}`);
    // },
    /* session is active */
    // session: async message => {
    //   console.log(`<==> Events session ${message}`);
    // },
    /* error in authentication flow */
    // error: async message => {
    //   console.log(`<==> Events error ${message}`);
    // }
    // },

    // debug: process.env.NODE_ENV === 'development'

    // true for HTTPS sites / false for HTTP sites
    // useSecureCookies: true,
  }
};

const Auth: NextApiHandler = async (req, res) => {
  // console.log('==> START [...nextauth] (req, res)');
  // console.log(`===>>> req - method:${req.method} url:${req.url}`);
  // console.log('===>>> req: query >>>>>>>>');
  // console.log(req.query);
  // console.log('===>>> req: body >>>>>>>>');
  // console.log(req.body);
  // console.log('===>>> start NextAuth(req, res, options)');
  await NextAuth(req, res, options);
  // console.log('===>>> End NextAuth');
  // console.log('<== END [...nextauth]');
};

export default Auth;
