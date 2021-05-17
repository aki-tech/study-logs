import 'tailwindcss/tailwind.css'
import Layout from '../layouts/Layout';
import UserProvider from '../context/userContext';

const MyApp = ({ Component, pageProps }) => {
  return pageProps.noLayout ? (
    <Component {...pageProps} />
  ) : (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
        <footer className="border-t py-6">
          <div className="container">
            <p>&copy; event</p>
          </div>
        </footer>
      </Layout>
    </UserProvider>
  );
};

export default MyApp;
