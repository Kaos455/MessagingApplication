/* Basic Imports */
import "./css/Avatar.css";
import PropTypes from 'prop-types';

function Avatar({ children }) {

    const handleClick = () => {
        console.log("Avatar clicked");
    }

    return (
        <>
            <button className="avatar" onClick={handleClick}>
                <img src="https://placehold.co/35/orange/white" alt="User Avatar" />
                <p>{children}</p>                            
            </button>
        </>
    );
}
Avatar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Avatar;