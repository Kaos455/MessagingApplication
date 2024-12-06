/* Basic Imports */
import "./css/Message.css";
import PropTypes from "prop-types";

/* Component Imports */

function Message({ variant = "sent", children }) {
    return (
        <p className={"message " + variant}>{children}</p>
    );
}

Message.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Message;