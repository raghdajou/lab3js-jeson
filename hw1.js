const HW= require('./hw1.json');
alltoopingTeypes();
allbatterTeypes1();
sum();
avapup();
allIDs ();
alltoopingTeypes2();


 //--------------------All batter types---------------

 function allbatterTeypes1(){
    console.log('---------------------------All batter types-------------')
for(let i=0;i<HW.length;i++){
    for(let h =0;h<(HW[i].batters.batter).length;h++){
     console.log(HW[i].batters.batter[h].type);

 };
};
 };

// //--------------------All topping types----------
function alltoopingTeypes(){
    console.log('-------------------------All Topping types-------------------')
    for(let i=0;i<HW.length;i++){
        for(let h =0;h<(HW[i].topping).length;h++){
         console.log(HW[i].topping[h].type);
    
     };
    };
};

// //---------------------Ppu sum------------

function sum () {
    let  sumpu = 0;
    for (let i in HW){
       sumpu+= HW[i].ppu;
    };
    console.log('----------------------pup sum is  '+ sumpu);
    return sumpu;
};

//------------------------Ppu average-------------------------------------

 function avapup(){ 
     let average = sum()/3;
      console.log('----------------------Ppu average is  '+average)
      return average;
      };
  //----------------------ALL IDS-----------------
//to print all ids in  jeson


function allIDs (){
    console.log('-----------------------All IDs---------------------')
    
for(let i=0;i<HW.length;i++){
    console.log(HW[i].id);
    for(let h=0;h<(HW[i].batters.batter).length;h++){
     console.log(HW[i].batters.batter[h].id);
    };
    for(let x=0;x<(HW[i].topping).length;x++){
     console.log(HW[i].topping[x].id);
};};
   
};
// I made this methode because  call this  method make error in my node  find all batter type
function allbatterTeypes2(){
    console.log('-----------------all batter another solution ----------------')
     for (let i=0 ;HW.length;i++){
        console.log(HW[0].batters.batter[i].type)//this line just ensure  
          
      };
};
// I made this methode because  call this  method make error in my node  find all topping type
function alltoopingTeypes2(){
    console.log('-----------------all topping another solution----------------')
    for (let i=0 ;HW.length;i++){
        console.log(HW[0].topping[i].type);
        let typeto= HW[0].topping[i].type 
     
        };
        return typeto;
};
//I made this methode because  call this  method make error in my node  find ids
function allIDs2 (){
    console.log('-----------------IDS another solution----------------')
    for (let i=0 ;HW.length;i++){
        console.log(HW[i].id , HW[0].batters.batter[i].id ,HW[0].topping[i].id )   
        
    };
};

 