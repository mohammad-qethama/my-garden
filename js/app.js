function Flowers( nam,img,ses,cat ){

  this.flowerName = nam;

  this.flowerImg = img;
  this.flowerSeason = ses;
  this.flowerCat= cat;
  Flowers.all.push( this );
}
Flowers.all=[];

function saveToLocalStorage(){


  localStorage.setItem( 'FlowerLS', JSON.stringify( Flowers.all ) );
}

function renderTabel(){
  let flowerList = JSON.parse( localStorage.getItem( 'FlowerLS' ) );
  let divTable =  document.getElementById( 'tableDiv' );
  divTable.innerHTML = '';
  if( flowerList ){
    Flowers.all = flowerList;
    let table = document.createElement( 'table' );
    divTable.appendChild( table );
    table.setAttribute( 'id','tablePage' );
    let tableHeader = document.createElement( 'tr' );
    table.appendChild( tableHeader );
    let tHeadTitleImg = document.createElement( 'td' );
    tableHeader.appendChild( tHeadTitleImg );
    tHeadTitleImg.innerHTML = '#image';
    let tableHeadName = document.createElement( 'td' );
    tableHeader.appendChild( tableHeadName );
    tableHeadName.innerHTML = 'Name';
    let tHeadTitleSes = document.createElement( 'td' );
    tableHeader.appendChild( tHeadTitleSes );
    tHeadTitleSes.innerHTML = 'Season';
    console.log(flowerList);
    console.log(flowerList.length);
    for ( let i = 0 ; i < flowerList.length;i++ ){
    console.log(flowerList);
      let tableBody = document.createElement( 'tr' );
      table.appendChild( tableBody );
      let tableImgData =  document.createElement( 'td' );
      tableBody.appendChild( tableImgData );
      tableImgData.innerHTML = ` <img src="${flowerList[i].flowerImg}" alt="${flowerList[i].flowerName}" width="30" height="30"> `;
      let tableNameData =  document.createElement( 'td' );
      tableBody.appendChild( tableNameData );
      tableNameData.textContent = `${flowerList[i].flowerName}`;
      let tableSeasonData =  document.createElement( 'td' );
      tableBody.appendChild( tableSeasonData );
      tableSeasonData.textContent=`${flowerList[i].flowerSeason}`;

    }


  }


}

function handleSubmit( event ){
  event.preventDefault();
  let flowerName = document.getElementById( 'flowerNa' ).value;
  let flowerCatg= document.getElementById( 'flowerCat' ).value;
  let flowerSeas=  document.getElementById( 'floweSes' ).value;

  let imgPrep = flowerCatg.toLowerCase();
  let flowerImgPath =  `./img/${imgPrep}.jpeg`;
  new Flowers( flowerName,flowerImgPath, flowerSeas,flowerCatg );
  console.log( flowerName,flowerImgPath, flowerSeas,flowerCatg );
  saveToLocalStorage();
  renderTabel();


}

renderTabel();

let formElement = document.getElementById( 'pageForm' );
formElement.addEventListener( 'submit',handleSubmit );
