import React from 'react';
import Dialog, {DialogProps} from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Button, DialogActions} from "@material-ui/core";

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
                <DialogTitle id="scroll-dialog-title">Isikuandmete kaitse ja privaatsustingimused</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >

<h3>Antud lehekülg annab ülevaate, kuidas ja mis otstarbel ReBuild veebiplatvorm kodulehe külastajate andmeid kogub ja töötleb.
 Privaatsustingimused lähtuvad andmekaitse üldregulatsioonist – GDPR.</h3>
 <br/>
<h5>Privaatsuspoliitika eesmärk on tagada klientide privaatsus kooskõlas Eesti Vabariigi seaduste ja Euroopa Liidu õigusaktidega.</h5>
<br/>
<h5>Kasutades ReBuild veebilehte, nõustute küpsiste kasutamisega ja isikuandmete töötlemise tingimustega, mis on kirjeldatud meie privaatsustingimustes.</h5>
<br/>
<h3>Kelle andmeid ReBuild töötleb?</h3>
<h5>ReBuild veebiplatvorm kasutab ja töötleb registreeritud kasutajate andmeid.</h5>
<br/>
<h3>Isikuandmete töötlemise eesmärgid ja õiguslikud alused</h3>
<h5>ReBuild klientide ehk teenuse kasutajate isikuandmeid töötleme selleks, et tagada klientide turvalisus ja heaolu veebilehel . Klientide isikuandmeid kasutame selleks, et pakkuda olemasolevatele klientidele kvaliteetsemat teenust ja täpsemat infot veebilehe kasutatavuse kohta.
Klientidelt tagasisidena saadud infot kasutame veebilehe arendamisel ja kasutajasõbralikuks muutmisel.
ReBuild veebiplatvormil kogume andmeid kasutajate külastatavuse, nende päritolu riigi ja linna kohta ning kasutusotstarbekuse kohta, mõistmaks paremini klientide sihtrühmi, nende huve, eesmärke ning pakkumaks kvaliteetsemat teenust. Kasutajasessioone salvestatakse saamaks täpsemat informatsiooni kasutaja harjumuste kohta ning tagamaks kodulehe funktsionaalsuse kasutajasõbralikkus. </h5>
<br/>
<h3>Isikuandmete kogumine</h3>
<h5>Kasutame automaatseid andmekogumisvahendeid - Google Analytics
Kasutame küpsiseid, mis salvestavad kodulehe kasutustegevust ja teisi jälgimisvahendeid - näiteks LogRocket.
Andmeid kogutakse kasutajakogemuse parandamiseks ning optimeerimiseks. Selle kaudu tagame kasutajale pakutavate teenuste mugava ja kõrge kvaliteedi.</h5>
<br/>
<h3>ReBuild veebilehe poolt kasutatavad küpsised:</h3>
<h5>Ajutised küpsised -  on seansipõhised ning kaovad, kui veebilehelt lahkute või oma veebilehitseja sulgete. Seansiküpsiseid võidakse kasutada veebilehe teatud funktsioonide, näiteks sisse logimiseks jaoks.</h5>
<br/>
<h3>ReBuild poolt töödeldavad isikuandmed</h3>
<br/>
<h4>Kontaktandmed:</h4><h5> eesnimi, perekonnanimi, e-posti aadress.</h5>
<br/>
<h4>Automaatselt kogutavad andmed:</h4> <h5>kasutaja veebibrauserilt saadud andmed- veebibrauseri liik. Seade, millega viibiti kodulehel, suhtluskeel, milliseid sisulehti kasutaja uuris, kaua teatud lehtedel viibis, kasutaja IP-aadress ja muud taolised kodulehestatistika andmed.</h5>


                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/*<Button onClick={handleClose} color="primary">*/}
                    {/*    Disagree*/}
                    {/*</Button>*/}
                    <Button onClick={handleClose} color="primary">
                        Sulge
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
