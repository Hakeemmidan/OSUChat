import { connect } from 'react-redux';
import { forgotPassword } from '../../../actions/session_actions';
import { SingleFieldForm } from './SingleFieldForm';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        confirmation: state.ui.confirmation.forgotPasswordConfirmation,
        type: "forgot-password",
        instructions: "Please enter your email to reset your password:",
        fieldLabel: "Email",
        submitButtonText: "Send password reset email"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (email) => dispatch(forgotPassword(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFieldForm);