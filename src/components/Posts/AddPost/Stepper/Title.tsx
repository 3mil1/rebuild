import React, {useCallback, useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import {useHistory, useLocation} from "react-router-dom";
import getFormData from "./services/getFormData";
import setFormData from "./services/setFormData";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const Title = () => {
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getFormData());

    const {handleSubmit, setValue, errors: fieldsErrors, control} = useForm({mode: 'onTouched'});

    useEffect(() => {
        setValue('Title', initialValues['Title']);
        setValue('Title2', initialValues['Title2']);
    }, [setValue, initialValues]);

    const onSubmit = useCallback(
        (values) => {
            let newOBJ = {...initialValues, ...values}
            setFormData(newOBJ);
            history.push({
                ...location,
                state: {
                    activeStep: 1,
                },
            });
        },
        [history, location, initialValues]
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl variant="outlined">
                <Controller
                    name="Title"
                    as={
                        <TextField
                            margin="normal"
                            id="firstName"
                            helperText={fieldsErrors.Title ? fieldsErrors.Title.message : ''}
                            variant="outlined"
                            label="Title"
                            error={!!fieldsErrors.Title}
                            name="Title"
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
            <Button variant="contained" color="primary" type="submit">
                Next
            </Button>
        </form>
    );
};

