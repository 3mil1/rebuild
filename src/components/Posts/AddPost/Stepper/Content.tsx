import {useHistory, useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import getFormData from "./services/getFormData";
import {Controller, useForm} from "react-hook-form";
import setFormData from "./services/setFormData";
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
                <FormControl variant="outlined" fullWidth={true}>
                    <Controller
                        name="Content"
                        as={
                            <TextField
                                margin="normal"
                                id="firstName"
                                helperText={fieldsErrors.Content ? fieldsErrors.Content.message : ''}
                                variant="outlined"
                                label="Sisu"
                                error={!!fieldsErrors.Content}
                                name="Content"
                                autoFocus
                                multiline={true}
                                rows={5}
                                fullWidth={true}
                            />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Kohustuslik väli',
                        }}
                    />
                </FormControl>
                <div style={{display: 'flex', justifyContent: "flex-end", marginTop: "3rem"}}>
                    <Button variant="outlined" onClick={onBack} style={{marginRight: "1.5rem"}}>
                        Tagasi
                    </Button>
                    <Button variant="outlined" color="primary" type="submit">
                        Edasi
                    </Button>
                </div>

            </form>
        </>
    );
})
