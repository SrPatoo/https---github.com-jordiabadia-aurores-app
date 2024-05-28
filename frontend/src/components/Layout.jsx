import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
