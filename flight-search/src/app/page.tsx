'use client';
import styles from './page.module.css'
import FormControl from '@mui/material/FormControl';
import { FormHelperText, Grid, InputLabel, TextField } from '@material-ui/core';
import airport from "../../public/airports.json";
import moment from 'moment';
import { SetStateAction, useState } from 'react';


export default function Home() {
  function submit(){
    console.log(returnDate);
  }
  const [currency, setSelectedCurrency] = useState('INR');
  const onCurrencyChange = (e: string) =>{
    setSelectedCurrency(e);
  };
  const [departureCode, setSelectedDepartureCode] = useState('DEL');
  const onDepartureCodeChange = (e: string) =>{
    setSelectedDepartureCode(e);
  };
  const [arrivalCode, setSelectedarrivalCode] = useState('CCU');
  const onArrivalCodeChange = (e: string) =>{
    setSelectedarrivalCode(e);
  };
  const [adultCounts, setAdultCounts] = useState(1);
  const onAdultCountsChange = (e: number) =>{
    setAdultCounts(e);
  };
  const [childrenCounts, setChildrenCounts] = useState(0);
  const onChildrenCountsChange = (e: number) =>{
    setChildrenCounts(e);
  };
  const [infantCounts, setInfantCounts] = useState(0);
  const oninfantCountsChange = (e: number) =>{
    setInfantCounts(e);
  };
  const [returnDate, setReturnDate] = useState(moment(Date.now()).format('YYYY-MM-DD'));
  const onReturnDateChange = (e: SetStateAction<string>) =>{
    console.log(e);
    setReturnDate(e);
  };
  const [departureDate, setDepartureDate] = useState(moment(Date.now()).format('YYYY-MM-DD'));
  const onDepartureDateChange = (e: SetStateAction<string>) =>{
    console.log(e);
    setDepartureDate(e);
  };
  const [travelClass, setTravelClass] = useState("");
  const onTravelClassChange = (e: string) =>{
    setTravelClass(e);
  };
  let adultsCountOptions = [];
  let childrenCountOptions = [];
/*   let departureDate = moment(Date.now()).format('YYYY-MM-DD'); */
  let Airportoptions = [];
  for (let i= 0;i<=10;i++){
    if(i!=0)
    adultsCountOptions.push(<option value={i}>{i}</option>)
    if(i<6)
    childrenCountOptions.push(<option value={i}>{i}</option>)
  }
for (let val in airport){
/*   tempOption.push({value:airport[val]["IATA_code"],name:airport[val]["city_name"]}); */
  Airportoptions.push(<option value={airport[val]["IATA_code"]}>{airport[val]["city_name"]}({airport[val]["IATA_code"]})</option>);
}
console.log(Airportoptions);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome To Flight Search&nbsp;
        </p>
{/*         <h2>
          GET STARTED&nbsp;
          </h2> */}
                    <a
            className={styles.currency}
          >
            <InputLabel htmlFor="my-input" style={{["color"]:"white"}} >Currency</InputLabel>
          <select id="my-input" className={styles.input} onChange={(e) => onCurrencyChange(e.target.value)} >
          <option value="INR" selected>INR</option>
          <option value="USD">USD	</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          </select>
          <br />
          </a>
        <div>
          <a
            href="https://github.com/saptarshi-bose/Flight-Search-Frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}<code className={styles.code}>SAPTARSHI BOSE</code>
{/*             <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */}
            <br />
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <a>
      <FormControl className={styles.form}>
      <Grid container spacing={8}>
      <Grid item xs={6}>
          <InputLabel htmlFor="my-input" style={{["color"]:"white"}}>Travelling From<sup>*</sup></InputLabel>
          <select id="my-input" className={styles.input} value={departureCode}>
          {Airportoptions}
          </select>
      </Grid>
  <Grid item xs={6}>
  <InputLabel htmlFor="my-input" style={{["color"]:"white"}}>Travelling To<sup>*</sup></InputLabel>
          <select id="my-input" className={styles.input} value={arrivalCode} >
          {Airportoptions}
          </select>
  </Grid>
  <Grid item xs={6}>
          <InputLabel htmlFor="my-input" style={{["color"]:"white"}} >Departure Date</InputLabel>
          <input type= "date" id="my-input" className={styles.input} value={departureDate} onChange={(e) => onDepartureDateChange(e.target.value)} />
{/*           <FormHelperText style={{["color"]:"white"}} id="my-helper-text">We will never share your email.</FormHelperText> */}

  </Grid>
  <Grid item xs={6}>
          <InputLabel htmlFor="return-date" style={{["color"]:"white"}}>Return Date</InputLabel>
          <input type="date" id="return-date" className={styles.input} onChange={(e) => onReturnDateChange(e.target.value)} />
          <FormHelperText style={{["color"]:"white"}} id="my-helper-text">Optional</FormHelperText>
  </Grid>
  <Grid item xs={3}>
          <InputLabel htmlFor="adult-count" style={{["color"]:"white"}} >Adults</InputLabel>
          <select id="my-input" className={styles.input} value={adultCounts} >
          {adultsCountOptions}
          </select>
          <FormHelperText style={{["color"]:"white"}} id="my-helper-text">minimum 1</FormHelperText>

  </Grid>
  <Grid item xs={3}>
          <InputLabel htmlFor="my-input" style={{["color"]:"white"}}>Children</InputLabel>
          <select id="my-input" className={styles.input} value={childrenCounts} >
          {childrenCountOptions}
          </select>
          <FormHelperText style={{["color"]:"white"}} id="my-helper-text">Children age between 2 and 12</FormHelperText>
  </Grid>
  <Grid item xs={3}>
          <InputLabel htmlFor="my-input" style={{["color"]:"white"}}>Infants</InputLabel>
          <select id="my-input" className={styles.input} value={infantCounts} >
          {childrenCountOptions}
          </select>
          <FormHelperText style={{["color"]:"white"}} id="my-helper-text">Below 2 Years</FormHelperText>
  </Grid>
  <Grid item xs={3}>
          <InputLabel htmlFor="my-input" style={{["color"]:"white"}} >Travel Class</InputLabel>
          <select id="my-input" className={styles.input} value={travelClass} >
          <option value="" selected>ANY</option>
          <option value="ECONOMY">ECONOMY</option>
          <option value="PREMIUM_ECONOMY">PREMIUM ECONOMY</option>
          <option value="BUSINESS">BUSINESS</option>
          <option value="FIRST">FIRST</option>
          </select>

  </Grid>
  <Grid item xs={12}>
    <a className={styles.centerButton}>
    <button className={styles.button} onClick={submit}><b style={{["padding"]:"10px"}}>SUBMIT</b></button>
    </a>
  </Grid>
</Grid>
          </FormControl>
          <div>

          </div>
        </a>
      </div>

{/*       <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
