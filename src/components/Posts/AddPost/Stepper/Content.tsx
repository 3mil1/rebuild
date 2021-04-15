import {useHistory, useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import getFormData from "./services/getFormData";
import {Controller, useForm} from "react-hook-form";
import setFormData from "./services/setFormData";
import IconButton from "@material-ui/core/IconButton";
import {KeyboardBackspace} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

export const Content = React.memo(function () {
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getFormData());

    const {handleSubmit, setValue, errors: fieldsErrors, control} = useForm({mode: 'onTouched'});

    useEffect(() => {
        setValue("Content", initialValues['Content'])
    }, [setValue, initialValues]);

    const onSubmit = useCallback(
        (values) => {
            let newOBJ = {...initialValues, ...values}
            setFormData(newOBJ);
            history.push({
                ...location,
                state: {
                    activeStep: 2,
                },
            });
        },
        [history, location, initialValues]
    );

    const onBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl variant="outlined">
                    <Controller
                        name="Content"
                        as={
                            <TextField
                                margin="normal"
                                id="firstName"
                                helperText={fieldsErrors.Content ? fieldsErrors.Content.message : ''}
                                variant="outlined"
                                label="Content"
                                error={!!fieldsErrors.Content}
                                name="Content"
                                autoFocus
                            />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Required',
                        }}
                    />
                </FormControl>
                <Button onClick={onBack} >
                    Back
                </Button>
                <Button variant="contained" color="primary" type="submit">
                    Next
                </Button>

            </form>
        </>
    );
})