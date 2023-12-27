import Header from "./header/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header backLink='/' />
            { children }
        </div>
    );
};

export default Layout;