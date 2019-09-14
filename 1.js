function biodata(){
  return{
    name: 'Eko kurniawan',
    age:26,
    address:'Desa Mekarjaya Kab.Tangerang',
    hobbies:['Basketball','soccer'],
    is_married: false,
    list_school:
      [{elementary_school:'SDN Mekarjaya', year_in:1999,year_out:2005},
      {junior_highschool:'SMPN 1 CURUG', year_in:2005,year_out:2008},
      {highschool:'SMKN 1 PANONGAN',year_in:2008,year_out:2011},
      {university:'STMIK INSAN PEMBANGUNAN',year_in:2014,year_out:2018}],
    interest_in_coding: true,


  }
}
let profile = biodata()


console.log(JSON.stringify(profile))
