import React from 'react';
import Dialog, {DialogProps} from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const TermOfService = (props: any) => {
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false)
    };


    return (
        <div>
            <Dialog
                disableBackdropClick={false}
                open={open}
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cum debitis et ipsam
                        molestias nobis. Asperiores ea perferendis quia repellat sequi! Aliquam atque eligendi fugit,
                        iste nam placeat rem voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cum debitis et ipsam
                        molestias nobis. Asperiores ea perferendis quia repellat sequi! Aliquam atque eligendi fugit,
                        iste nam placeat rem voluptas.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
