import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from "react-router";


class PositionedSnackbar extends React.Component {




    render() {
        const vertical = this.props.vertical;
        const horizontal = this.props.horizontal
        return (
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={this.props.open}
                onClose={this.props.handleClothes}
                autoHideDuration={3000}
                message={this.props.message}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}

            />
            // </div>
        );
    }
}

export default withRouter(PositionedSnackbar);